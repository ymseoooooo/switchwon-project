'use client';
import { ChangeEventHandler, MouseEventHandler, useCallback, useEffect, useState } from 'react';

import { useQueryFindLatestExchangeRate } from '@/hooks/queries/exchangeRate/useQueryFindLatestExchangeRate';
import { CurrencyType } from '@/apis/interfaces/currency';
import { ExchangeType } from './exchangebox.define';
import { useQueryFindOrderQuote } from '@/hooks/queries/order/useQueryFindOrderQuote';
import { FindOrderQuoteResponse, PostOrderRequest } from '@/apis/interfaces/order';
import { keepPreviousData, useQueryClient } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { useMutationPostOrder } from '@/hooks/queries/order/useMutationPostOrder';
import { QueryKey } from '@/constants/query/key';

interface UseExchangeBoxReturn {
  exchangeType: ExchangeType;
  currency?: CurrencyType;
  forexAmount: string;
  orderQuote?: FindOrderQuoteResponse;
  handler: {
    handleChangeCurrency: (currency?: CurrencyType) => void;
    handleClickTab: (type: ExchangeType) => void;
    handleChangeForexAmount: ChangeEventHandler<HTMLInputElement>;
    handleClickOrder: MouseEventHandler<HTMLButtonElement>;
  };
}
export function useExchangeBox(): UseExchangeBoxReturn {
  const queryClient = useQueryClient();
  const [exchangeType, setExchangeType] = useState<ExchangeType>('buy');
  const [currency, setCurrency] = useState<CurrencyType>();
  const [forexAmount, setForexAmount] = useState<string>('1');

  const deBouncedForexAmount = useDebounce<string>(forexAmount, 500);

  // 최근 환율 조회를 통해 동적으로 통화 리스트 설정
  const { data: exchangeRates } = useQueryFindLatestExchangeRate({
    req: undefined,
  });

  const currencies = exchangeRates?.flatMap(item => item.currency);
  const fromCurrency = exchangeType === 'buy' ? 'KRW' : currency!;
  const toCurrency = exchangeType === 'buy' ? currency! : 'KRW';

  const { data: orderQuote } = useQueryFindOrderQuote({
    req: {
      fromCurrency,
      toCurrency,
      forexAmount: Number(deBouncedForexAmount),
    },
    queryOption: {
      placeholderData: keepPreviousData,
      enabled: !!currency && !!Number(deBouncedForexAmount),
    },
  });

  const { mutate: mutateOrder } = useMutationPostOrder({
    mutationOption: {
      onSuccess: () => {},
    },
  });

  const handleChangeCurrency = (currency?: CurrencyType) => {
    setCurrency(currency);
  };

  const handleClickTab = (type: ExchangeType) => {
    setExchangeType(type);
  };

  const handleChangeForexAmount: ChangeEventHandler<HTMLInputElement> = e => {
    setForexAmount(e.target.value);
  };

  const handleClickOrder: MouseEventHandler<HTMLButtonElement> = () => {
    const exchangeRateId = exchangeRates?.find(item => item.currency === currency)?.exchangeRateId;

    if (!exchangeRateId) {
      return;
    }

    const orderRequest: PostOrderRequest = {
      exchangeRateId,
      fromCurrency,
      toCurrency,
      forexAmount: Number(deBouncedForexAmount),
    };

    mutateOrder(orderRequest, {
      onSuccess: () => {
        console.log('success');
        queryClient.invalidateQueries({ queryKey: QueryKey.wallet.findWallets() });
      },
      onError: err => console.error(err.response?.data),
      // TODO: EXCHANGE_RATE_MISMATCH error code 추가후 queryClient.invalidateQueries({ queryKey: QueryKey.exchangeRate.findLatestExchangeRate() });
    });
  };

  useEffect(() => {
    if (currencies) {
      setCurrency(currencies[0]);
    }
  }, [currencies]);

  return {
    exchangeType,
    currency,
    forexAmount,
    orderQuote,
    handler: {
      handleClickTab,
      handleChangeCurrency,
      handleChangeForexAmount,
      handleClickOrder,
    },
  };
}

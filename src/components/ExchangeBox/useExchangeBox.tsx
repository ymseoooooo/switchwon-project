'use client';
import { ChangeEventHandler, MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash-es';

import { useQueryFindLatestExchangeRate } from '@/hooks/queries/exchangeRate/useQueryFindLatestExchangeRate';
import { CurrencyType } from '@/apis/interfaces/currency';
import { ExchangeType } from './exchangebox.define';
import { useQueryFindOrderQuote } from '@/hooks/queries/order/useQueryFindOrderQuote';
import { FindOrderQuoteResponse, PostOrderRequest } from '@/apis/interfaces/order';
import { keepPreviousData, useQueryClient } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { useMutationPostOrder } from '@/hooks/queries/order/useMutationPostOrder';
import { QueryKey } from '@/constants/query/key';
import { DomainErrorCode } from '@/defines/api/errorCode';

interface UseExchangeBoxReturn {
  exchangeType: ExchangeType;
  currency: CurrencyType;
  forexAmount: string;
  orderQuote?: FindOrderQuoteResponse;
  handler: {
    handleChangeCurrency: (currency: CurrencyType) => void;
    handleClickTab: (type: ExchangeType) => void;
    handleChangeForexAmount: ChangeEventHandler<HTMLInputElement>;
    handleClickOrder: MouseEventHandler<HTMLButtonElement>;
  };
}
export function useExchangeBox(): UseExchangeBoxReturn {
  const queryClient = useQueryClient();
  const [exchangeType, setExchangeType] = useState<ExchangeType>('buy');
  const [currency, setCurrency] = useState<CurrencyType>('JPY');
  const [forexAmount, setForexAmount] = useState<string>('1');

  const deBouncedForexAmount = useDebounce<string>(forexAmount, 500);

  // 최근 환율 조회를 통해 동적으로 통화 리스트 설정
  const { data: exchangeRates } = useQueryFindLatestExchangeRate({
    req: undefined,
  });

  const currencies = useMemo(() => exchangeRates?.flatMap(item => item.currency), [exchangeRates]);
  const fromCurrency = exchangeType === 'buy' ? 'KRW' : currency;
  const toCurrency = exchangeType === 'buy' ? currency : 'KRW';

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

  const handleChangeCurrency = (currency: CurrencyType) => {
    setCurrency(currency);
  };

  const handleClickTab = (type: ExchangeType) => {
    setExchangeType(type);
  };

  const handleChangeForexAmount: ChangeEventHandler<HTMLInputElement> = e => {
    setForexAmount(e.target.value);
  };

  const handleClickOrder: MouseEventHandler<HTMLButtonElement> = debounce(() => {
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
        queryClient.invalidateQueries({ queryKey: QueryKey.wallet.findWallets() });
      },
      onError: err => {
        console.error(err.response?.data);

        if (err.response?.data.code === DomainErrorCode.EXCHANGE_RATE_MISMATCH) {
          queryClient.invalidateQueries({ queryKey: QueryKey.exchangeRate.findLatestExchangeRate() });
        }
      },
    });
  }, 500);

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

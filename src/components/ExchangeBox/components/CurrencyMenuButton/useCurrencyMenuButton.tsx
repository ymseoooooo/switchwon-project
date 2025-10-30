'use client';
import { CurrencyType } from '@/apis/interfaces/currency';
import { OverlayPanelHandler } from '@/components/common/OverlayPanel/overlayPanel.define';
import { useQueryFindLatestExchangeRate } from '@/hooks/queries/exchangeRate/useQueryFindLatestExchangeRate';
import { JapanIcon } from '@/icons/JapanIcon';
import { USAIcon } from '@/icons/USAIcon';
import { ReactNode, RefObject, useRef } from 'react';

interface UseCurrencyMenuButtonReturn {
  targetRef: RefObject<HTMLButtonElement | null>;
  overlayRef: RefObject<OverlayPanelHandler | null>;
  currencies: CurrencyType[];
  getCountryIcon: (currency?: CurrencyType) => ReactNode;
}

export function useCurrencyMenuButton(): UseCurrencyMenuButtonReturn {
  const targetRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<OverlayPanelHandler>(null);

  // 최근 환율 조회를 통해 동적으로 통화 리스트 설정
  const { data: currencies = [] } = useQueryFindLatestExchangeRate({
    req: undefined,
    queryOption: {
      select: data => data.flatMap(item => item.currency),
    },
  });

  const getCountryIcon = (currency?: CurrencyType) => {
    switch (currency) {
      case 'USD':
        return <USAIcon className="size-8" />;
      case 'JPY':
        return <JapanIcon className="size-8" />;
      default:
        return <></>;
    }
  };

  return { targetRef, overlayRef, currencies, getCountryIcon };
}

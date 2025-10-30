'use client';
import { MouseEventHandler } from 'react';
import { ExchangeType } from '../../exchangebox.define';

interface UseExchangeTabsParams {
  onChangeTab: (type: ExchangeType) => void;
}

interface UseExchangeTabsReturn {
  handler: {
    handleClickTab: (type: ExchangeType) => MouseEventHandler<HTMLButtonElement>;
  };
}

export function useExchangeTabs({ onChangeTab }: UseExchangeTabsParams): UseExchangeTabsReturn {
  const handleClickTab = (type: ExchangeType) => () => {
    onChangeTab(type);
  };

  return { handler: { handleClickTab } };
}

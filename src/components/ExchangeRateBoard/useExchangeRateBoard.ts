'use client';
import { ExchangeRate } from '@/apis/interfaces/exchangeRate';
import {
  QUERY_FIND_LATEST_EXCHANGE_RATE_INTERVAL,
  useQueryFindLatestExchangeRate,
} from '@/hooks/queries/exchangeRate/useQueryFindLatestExchangeRate';

interface UseExchangeRateBoardReturn {
  exchangeRates?: ExchangeRate[];
}

export function useExchangeRateBoard(): UseExchangeRateBoardReturn {
  const { data: exchangeRates } = useQueryFindLatestExchangeRate({
    req: undefined,
    queryOption: { refetchInterval: QUERY_FIND_LATEST_EXCHANGE_RATE_INTERVAL },
  });

  return { exchangeRates };
}

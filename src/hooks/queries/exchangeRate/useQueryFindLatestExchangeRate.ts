import { useQuery } from '@tanstack/react-query';

import { FindExchangeRateLatestRateResponse } from '@/apis/interfaces/exchangeRate';
import { UseQueryParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/api/errorCode';
import { QueryKey } from '@/constants/query/key';
import { exchangeRate } from '@/apis/factories/exchangeRate';

export const QUERY_FIND_LATEST_EXCHANGE_RATE_INTERVAL = 60000;

type Request = undefined;
type Response = FindExchangeRateLatestRateResponse;

type UseQueryFindLatestExchangeRateParams<TQueryResponse> = UseQueryParams<
  Response,
  ErrorResponse,
  Request,
  TQueryResponse
>;

export function useQueryFindLatestExchangeRate<TQueryResponse = Response>(
  params: UseQueryFindLatestExchangeRateParams<TQueryResponse>
) {
  const { queryOption } = params;

  return useQuery({
    queryKey: QueryKey.exchangeRate.findLatestExchangeRate(),
    queryFn: () => exchangeRate.findLatestExchangeRate(),
    ...queryOption,
  });
}

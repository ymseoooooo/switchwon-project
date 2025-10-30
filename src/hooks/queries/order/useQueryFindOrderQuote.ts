import { useQuery } from '@tanstack/react-query';

import { UseQueryParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/api/errorCode';
import { QueryKey } from '@/constants/query/key';
import { FindOrderQuoteRequest, FindOrderQuoteResponse } from '@/apis/interfaces/order';
import { order } from '@/apis/factories/order';

type Request = FindOrderQuoteRequest;
type Response = FindOrderQuoteResponse;

type UseQueryFindOrderQuoteParams<TQueryResponse> = UseQueryParams<Response, ErrorResponse, Request, TQueryResponse>;

export function useQueryFindOrderQuote<TQueryResponse = Response>(
  params: UseQueryFindOrderQuoteParams<TQueryResponse>
) {
  const { req, queryOption } = params;

  return useQuery({
    queryKey: QueryKey.order.findOrderQuote(req),
    queryFn: () => order.findOrderQuote(req),
    ...queryOption,
  });
}

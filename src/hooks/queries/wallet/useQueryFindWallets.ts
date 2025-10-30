import { useQuery } from '@tanstack/react-query';

import { UseQueryParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/api/errorCode';
import { QueryKey } from '@/constants/query/key';
import { FindWalletsResponse } from '@/apis/interfaces/wallet';
import { wallets } from '@/apis/factories/wallet';

type Request = undefined;
type Response = FindWalletsResponse;

type UseQueryFindWalletsParams<TQueryResponse> = UseQueryParams<Response, ErrorResponse, Request, TQueryResponse>;

export function useQueryFindWallets<TQueryResponse = Response>(params: UseQueryFindWalletsParams<TQueryResponse>) {
  const { queryOption } = params;

  return useQuery({
    queryKey: QueryKey.wallet.findWallets(),
    queryFn: () => wallets.findWallets(),
    ...queryOption,
  });
}

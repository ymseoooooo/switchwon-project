import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';

export interface UseQueryParams<TResponse, TError, TRequest = undefined, TQueryResponse = TResponse> {
  req: TRequest;
  queryOption?: Omit<UseQueryOptions<TResponse, TError, TQueryResponse>, 'queryKey' | 'queryFn'>;
}

export interface UseMutationParams<TResponse, TError, TRequest> {
  mutationOption?: UseMutationOptions<TResponse, TError, TRequest>;
}

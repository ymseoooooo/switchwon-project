import { OmitKeyof, QueryObserverOptions } from '@tanstack/react-query';

const QUERY_DEFAULT_RETRY = 3;

export const QUERY_DEFAULT_OPTION: OmitKeyof<QueryObserverOptions, 'suspense' | 'queryKey'> = {
  refetchOnWindowFocus: false,
  retry: QUERY_DEFAULT_RETRY,
};

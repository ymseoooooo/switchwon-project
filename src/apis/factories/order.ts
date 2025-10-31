import { axiosInstance, serverDomainPath } from '../config';
import { ApiResponse } from '@/defines/api/response';
import { getAuthorizationConfig } from '../common';
import { Request2QueryParam } from '@/utils/query';
import { FindOrderQuoteRequest, FindOrderQuoteResponse, PostOrderRequest } from '../interfaces/order';

export const order = {
  findOrderQuote: async (request: FindOrderQuoteRequest) => {
    return (
      await axiosInstance.get<ApiResponse<FindOrderQuoteResponse>>(
        `${serverDomainPath.order}/quote?${Request2QueryParam(request)}`,
        {
          ...(await getAuthorizationConfig()),
        }
      )
    ).data.data;
  },

  postOrder: async (request: PostOrderRequest) => {
    return (
      await axiosInstance.post<ApiResponse<string>>(`${serverDomainPath.order}`, request, {
        ...(await getAuthorizationConfig()),
      })
    ).data.data;
  },
};

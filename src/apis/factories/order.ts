import { axiosInstance, serverUrl } from '../config';
import { ApiResponse } from '@/defines/api/response';
import { getAuthorizationConfig } from '../common';
import { Request2QueryParam } from '@/utils/query';
import { FindOrderQuoteRequest, FindOrderQuoteResponse } from '../interfaces/order';

const axiosOrderInstance = axiosInstance.create({
  baseURL: `${serverUrl}/orders`,
});

export const order = {
  findOrderQuote: async (request: FindOrderQuoteRequest) => {
    return (
      await axiosOrderInstance.get<ApiResponse<FindOrderQuoteResponse>>(`/quote?${Request2QueryParam(request)}`, {
        ...(await getAuthorizationConfig()),
      })
    ).data.data;
  },
};

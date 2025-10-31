import { axiosInstance, serverDomainPath } from '../config';
import { ApiResponse } from '@/defines/api/response';
import { FindExchangeRateLatestRateResponse } from '../interfaces/exchangeRate';
import { getAuthorizationConfig } from '../common';

export const exchangeRate = {
  findLatestExchangeRate: async () => {
    return (
      await axiosInstance.get<ApiResponse<FindExchangeRateLatestRateResponse>>(
        `${serverDomainPath.exchangeRate}/latest`,
        {
          ...(await getAuthorizationConfig()),
        }
      )
    ).data.data;
  },
};

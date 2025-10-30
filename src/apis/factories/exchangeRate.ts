import { axiosInstance, serverUrl } from '../config';
import { ApiResponse } from '@/defines/api/response';
import { FindExchangeRateLatestRateResponse } from '../interfaces/exchangeRate';
import { getAuthorizationConfig } from '../common';

const axiosExchangeRateInstance = axiosInstance.create({
  baseURL: `${serverUrl}/exchange-rates`,
});

export const exchangeRate = {
  findLatestExchangeRate: async () => {
    return (
      await axiosExchangeRateInstance.get<ApiResponse<FindExchangeRateLatestRateResponse>>(`/latest`, {
        ...(await getAuthorizationConfig()),
      })
    ).data.data;
  },
};

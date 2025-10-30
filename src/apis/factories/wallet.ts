import { axiosInstance, serverUrl } from '../config';
import { ApiResponse } from '@/defines/api/response';
import { getAuthorizationConfig } from '../common';
import { FindWalletsResponse } from '../interfaces/wallet';

const axiosWalletsInstance = axiosInstance.create({
  baseURL: `${serverUrl}/wallets`,
});

export const wallets = {
  findWallets: async () => {
    return (
      await axiosWalletsInstance.get<ApiResponse<FindWalletsResponse>>('', {
        ...(await getAuthorizationConfig()),
      })
    ).data.data;
  },
};

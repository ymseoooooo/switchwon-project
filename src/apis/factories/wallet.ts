import { axiosInstance, serverDomainPath } from '../config';
import { ApiResponse } from '@/defines/api/response';
import { getAuthorizationConfig } from '../common';
import { FindWalletsResponse } from '../interfaces/wallet';

export const wallets = {
  findWallets: async () => {
    return (
      await axiosInstance.get<ApiResponse<FindWalletsResponse>>(`${serverDomainPath.wallet}`, {
        ...(await getAuthorizationConfig()),
      })
    ).data.data;
  },
};

import { Request2QueryParam } from '@/utils/query';
import { axiosInstance, serverDomainPath } from '../config';
import { AuthLoginRequest, AuthLoginResponse } from '../interfaces/auth';
import { ApiResponse } from '@/defines/api/response';

export const auth = {
  login: async (request: AuthLoginRequest) => {
    return (
      await axiosInstance.post<ApiResponse<AuthLoginResponse>>(
        `${serverDomainPath.auth}/login?${Request2QueryParam(request)}`
      )
    ).data.data;
  },
};

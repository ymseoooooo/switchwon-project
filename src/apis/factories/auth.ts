import { Request2QueryParam } from '@/utils/query';
import { axiosInstance, serverUrl } from '../config';
import { AuthLoginRequest, AuthLoginResponse } from '../interfaces/auth';
import { ApiResponse } from '@/defines/api/response';

const axiosAuthInstance = axiosInstance.create({
  baseURL: `${serverUrl}/auth`,
});

export const auth = {
  login: async (request: AuthLoginRequest) => {
    return (await axiosAuthInstance.post<ApiResponse<AuthLoginResponse>>(`/login?${Request2QueryParam(request)}`)).data
      .data;
  },
};

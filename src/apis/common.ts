import { AxiosRequestConfig } from 'axios';
import { getCookie } from '@/utils/cookie';
import { EToken } from '@/constants/cookie';

export async function getAuthorizationConfig(): Promise<AxiosRequestConfig> {
  const token = await getCookie(EToken.ACCESS);

  return {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  };
}

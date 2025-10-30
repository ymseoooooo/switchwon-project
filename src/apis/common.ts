import { getCookie } from '@/utils/cookie';
import { AxiosRequestConfig } from 'axios';

export async function getAuthorizationConfig(): Promise<AxiosRequestConfig> {
  const token = await getCookie('token');

  return {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  };
}

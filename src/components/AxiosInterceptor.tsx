'use client';

import { useRouter } from 'next/navigation';
import { memo, useCallback, useEffect, useRef } from 'react';
import { StatusCodes } from 'http-status-codes';

import { axiosInstance } from '@/apis/config';
import { getCookie, removeCookie } from '@/utils/cookie';
import { EToken } from '@/constants/cookie';

function AxiosInterceptor() {
  const interceptorId = useRef<{
    request?: number;
    response?: number;
  }>({});

  const router = useRouter();

  const setReqInterceptor = useCallback(() => {
    if (interceptorId.current.request !== undefined) return;

    const id = axiosInstance.interceptors.request.use(async config => {
      const newConfig = { ...config };
      const accessToken = (await getCookie(EToken.ACCESS))?.value;

      if (accessToken) {
        newConfig.headers!['Authorization'] = `Bearer ${accessToken}`;
      } else if (newConfig?.headers?.['Authorization']) {
        delete newConfig.headers['Authorization'];
      }

      return newConfig;
    });

    interceptorId.current.request = id;
  }, []);

  const setResInterceptor = useCallback(() => {
    if (interceptorId.current.response !== undefined) return;

    const id = axiosInstance.interceptors.response.use(
      response => response,
      async error => {
        const { response } = error;

        if (response?.status === StatusCodes.UNAUTHORIZED) {
          await removeCookie(EToken.ACCESS);
          return router.push('/login');
        }

        return Promise.reject(error);
      }
    );

    interceptorId.current.response = id;
  }, []);

  useEffect(() => {
    setReqInterceptor();
    setResInterceptor();

    // 컴포넌트 언마운트 시 인터셉터 정리
    return () => {
      if (interceptorId.current.request !== undefined) {
        axiosInstance.interceptors.request.eject(interceptorId.current.request);
        interceptorId.current.request = undefined;
      }
      if (interceptorId.current.response !== undefined) {
        axiosInstance.interceptors.response.eject(interceptorId.current.response);
        interceptorId.current.response = undefined;
      }
    };
  }, [setReqInterceptor, setResInterceptor]);

  return null;
}

export default memo(AxiosInterceptor);

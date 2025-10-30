'use client';
import { removeCookie } from '@/utils/cookie';
import { useRouter } from 'next/navigation';
import { MouseEventHandler } from 'react';

interface UseNavigationbarReturn {
  handler: {
    handleClickLogout: MouseEventHandler;
  };
}

export function useNavigationbar(): UseNavigationbarReturn {
  const router = useRouter();

  const handleClickLogout = async () => {
    try {
      await removeCookie('token');
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handler: {
      handleClickLogout,
    },
  };
}

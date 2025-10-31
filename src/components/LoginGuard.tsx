'use server';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

import { isLogin } from '@/utils/auth';

type LoginGuardProps = PropsWithChildren;

export async function LoginGuard({ children }: LoginGuardProps) {
  const isLoggedIn = await isLogin();

  if (!isLoggedIn) {
    redirect('/login');
  }

  return <>{children}</>;
}

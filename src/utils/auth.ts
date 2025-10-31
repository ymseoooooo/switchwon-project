'use server';

import { cookies } from 'next/headers';
import { EToken } from '@/constants/cookie';

export async function isLogin(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(EToken.ACCESS);

  if (!token) {
    return false;
  }

  return true;
}

'use server';
import { cookies } from 'next/headers';
import { CookieOptions } from '@/defines/cookie';

export async function getCookie(name: string) {
  return (await cookies()).get(name);
}

export async function setCookie(name: string, value: string, options?: CookieOptions) {
  (await cookies()).set({ name, value, ...options });
}

export async function removeCookie(name: string) {
  (await cookies()).delete(name);
}

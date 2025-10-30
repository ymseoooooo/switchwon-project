'use client';
import { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

import useMutationLogin from '@/hooks/queries/auth/useMutationLogin';
import { setCookie } from '@/utils/cookie';
import { getJwtMaxAge } from '@/utils/jwt';

interface UseLoginFormReturn {
  email: string;
  handler: {
    handleChangeEmail: ChangeEventHandler<HTMLInputElement>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
  };
}
export function useLoginForm(): UseLoginFormReturn {
  const router = useRouter();
  const { mutate: mutateLogin } = useMutationLogin({});

  const [email, setEmail] = useState<string>('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutateLogin(
      {
        email,
      },
      {
        onSuccess: async res => {
          try {
            const maxAge = getJwtMaxAge(res.token);

            await setCookie('token', res.token, { maxAge });
            router.push('/');
          } catch (error) {
            console.error(error);
          }
        },
        onError: err => console.error(err.response?.data),
      }
    );
  };

  return {
    email,
    handler: {
      handleChangeEmail,
      handleSubmit,
    },
  };
}

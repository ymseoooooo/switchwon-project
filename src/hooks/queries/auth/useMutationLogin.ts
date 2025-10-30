import { useMutation } from '@tanstack/react-query';
import { AuthLoginRequest, AuthLoginResponse } from '@/apis/interfaces/auth';
import { auth } from '@/apis/factories/auth';
import { UseMutationParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/api/errorCode';

export type UseMutationLoginParams = UseMutationParams<AuthLoginResponse, ErrorResponse, AuthLoginRequest>;

export default function useMutationLogin(params: UseMutationLoginParams) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: (req: AuthLoginRequest) => {
      return auth.login(req);
    },
    ...mutationOption,
  });
}

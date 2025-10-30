import { AuthLoginRequest } from '@/apis/interfaces/auth';
import { Request2QueryParam } from '@/utils/query';

export const QueryKey = {
  auth: {
    base: ['auth'] as const,

    login: (req: AuthLoginRequest) => [...QueryKey.auth.base, 'login', Request2QueryParam(req)],
  },
};

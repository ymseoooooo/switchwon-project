import { useMutation } from '@tanstack/react-query';

import { UseMutationParams } from '@/defines/reactQuery';
import { ErrorResponse } from '@/defines/api/errorCode';
import { PostOrderRequest } from '@/apis/interfaces/order';
import { order } from '@/apis/factories/order';

export type UseMutationPostOrderParams = UseMutationParams<string, ErrorResponse, PostOrderRequest>;

export function useMutationPostOrder(params: UseMutationPostOrderParams) {
  const { mutationOption } = params;

  return useMutation({
    mutationFn: (req: PostOrderRequest) => {
      return order.postOrder(req);
    },
    ...mutationOption,
  });
}

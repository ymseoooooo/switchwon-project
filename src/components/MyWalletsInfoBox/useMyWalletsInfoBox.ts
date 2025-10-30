'use client';
import { FindWalletsResponse } from '@/apis/interfaces/wallet';
import { useQueryFindWallets } from '@/hooks/queries/wallet/useQueryFindWallets';

interface UseMyWalletsInfoBoxReturn {
  walletsResponse?: FindWalletsResponse;
}

export function useMyWalletsInfoBox(): UseMyWalletsInfoBoxReturn {
  const { data: walletsResponse } = useQueryFindWallets({ req: undefined });

  return { walletsResponse };
}

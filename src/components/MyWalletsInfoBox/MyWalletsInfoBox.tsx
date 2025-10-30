'use client';
import { Box } from '@/components/Box';
import { CurrencyLabel } from '@/components/CurrencyLabel';
import { Divide } from '@/components/common/Divide';

import { useMyWalletsInfoBox } from './useMyWalletsInfoBox';

export function MyWalletsInfoBox() {
  const { walletsResponse } = useMyWalletsInfoBox();

  return (
    <>
      {/* TODO 스켈레톤 적용 */}
      {walletsResponse && (
        <Box className="h-[620px] w-[628px]" color="gray">
          <div className="flex h-full flex-col gap-8">
            <div className="font-extrabold-24 text-gray-800">내 지갑</div>

            <div className="flex h-full flex-col justify-between gap-3">
              <div className="flex flex-1 flex-col gap-3">
                {walletsResponse?.wallets.map(({ walletId, currency, balance }) => (
                  <div key={walletId} className="flex justify-between text-gray-600">
                    <div className="font-medium-20">{currency}</div>
                    <CurrencyLabel className="font-semibold-20" currency={currency} value={balance} />
                  </div>
                ))}
              </div>

              <Divide />

              <div className="flex justify-between">
                <div className="font-medium-20 text-gray-600">총 보유 자산</div>
                <CurrencyLabel
                  className="font-bold-20 text-blue-500"
                  currency="KRW"
                  value={walletsResponse?.totalKrwBalance ?? 0}
                />
              </div>
            </div>
          </div>
        </Box>
      )}
    </>
  );
}

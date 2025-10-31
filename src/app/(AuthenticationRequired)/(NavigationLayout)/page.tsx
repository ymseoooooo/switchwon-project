import { ExchangeBox } from '@/components/ExchangeBox';
import { ExchangeRateBoard } from '@/components/ExchangeRateBoard';
import { MyWalletsInfoBox } from '@/components/MyWalletsInfoBox';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center gap-6 px-20 py-10">
      <div className="flex flex-col gap-2">
        <div className="font-bold-40 text-gray-800">환율 정보</div>
        <div className="font-regular-20 text-gray-700">실시간 환율을 확인하고 간편하게 환전하세요.</div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <ExchangeRateBoard />

          <MyWalletsInfoBox />
        </div>

        <ExchangeBox />
      </div>
    </div>
  );
}

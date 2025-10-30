import { ExchangeRate } from '@/apis/interfaces/exchangeRate';
import { Box } from '@/components/Box';
import { useExchangeRateBox } from './useExchangeRateBox';

interface ExchangeRateBoxProps {
  exchangeRate: ExchangeRate;
}

export function ExchangeRateBox({ exchangeRate }: ExchangeRateBoxProps) {
  const { getCurrencyTransrate, getPercentageLabel } = useExchangeRateBox();

  return (
    <Box className="h-[143px] w-[304px]">
      <div className="flex justify-between gap-5">
        <div className="flex flex-col gap-2">
          <div className="font-semibold-20 text-gray-600">{exchangeRate.currency}</div>

          <div>
            <div className="font-bold-24 text-gray-800">{exchangeRate.rate} KRW</div>
            <div>{getPercentageLabel(exchangeRate.changePercentage)}</div>
          </div>
        </div>

        <div className="font-regualar-16 text-gray-600">{getCurrencyTransrate(exchangeRate.currency)}</div>
      </div>
    </Box>
  );
}

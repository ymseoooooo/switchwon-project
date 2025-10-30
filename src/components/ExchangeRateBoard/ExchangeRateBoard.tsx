'use client';
import { ExchangeRateBox } from './components/ExchangeRateBox';
import { useExchangeRateBoard } from './useExchangeRateBoard';

export function ExchangeRateBoard() {
  const { exchangeRates } = useExchangeRateBoard();

  return (
    <div className="flex gap-[20px]">
      {exchangeRates?.map(exchangeRate => (
        <ExchangeRateBox key={exchangeRate.exchangeRateId} exchangeRate={exchangeRate} />
      ))}
    </div>
  );
}

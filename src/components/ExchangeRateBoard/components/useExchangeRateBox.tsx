import { ReactNode } from 'react';
import { CaretDownIcon } from '@/icons/CaretDownIcon';
import { CaretUpIcon } from '@/icons/CaretUpIcon';

interface UseExchangeRateBoxReturn {
  getPercentageLabel: (changePercentage: number) => ReactNode;
}

export function useExchangeRateBox(): UseExchangeRateBoxReturn {
  const getPercentageLabel = (changePercentage: number) => {
    if (changePercentage > 0) {
      return (
        <div className="text-buy-red font-regualar-16 flex">
          <CaretUpIcon className="size-6" />
          <div>+{changePercentage}%</div>
        </div>
      );
    } else {
      return (
        <div className="text-sell-blue font-regualar-16 flex">
          <CaretDownIcon className="size-6" />
          <div>{changePercentage}%</div>
        </div>
      );
    }
  };

  return {
    getPercentageLabel,
  };
}

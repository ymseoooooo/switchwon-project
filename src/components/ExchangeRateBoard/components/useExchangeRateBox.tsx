import { ReactNode } from 'react';
import { CurrencyType } from '@/apis/interfaces/exchangeRate';
import { CaretDownIcon } from '@/icons/CaretDownIcon';
import { CaretUpIcon } from '@/icons/CaretUpIcon';

interface UseExchangeRateBoxReturn {
  getCurrencyTransrate: (currency: CurrencyType) => string;
  getPercentageLabel: (changePercentage: number) => ReactNode;
}

export function useExchangeRateBox(): UseExchangeRateBoxReturn {
  const getCurrencyTransrate = (currency: CurrencyType) => {
    let label = '';
    switch (currency) {
      case 'USD':
        label = '미국 달러';
        break;
      case 'JPY':
        label = '일본 엔화';
        break;
      default:
        break;
    }

    return label;
  };

  const getPercentageLabel = (changePercentage: number) => {
    if (changePercentage > 0) {
      return (
        <div className="text-buy-red font-regualar-16 flex">
          <CaretUpIcon className="h-6 w-6" />
          <div>+{changePercentage}%</div>
        </div>
      );
    } else {
      return (
        <div className="text-sell-blue font-regualar-16 flex">
          <CaretDownIcon className="h-6 w-6" />
          <div>{changePercentage}%</div>
        </div>
      );
    }
  };

  return {
    getCurrencyTransrate,
    getPercentageLabel,
  };
}

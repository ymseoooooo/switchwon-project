import { CurrencyType } from '@/apis/interfaces/currency';
import { getCurrencyUnit, toComma } from '@/utils/currency';

interface CurrencyLabelProps {
  className?: string;
  currency: CurrencyType;
  value: number | string;
}

export function CurrencyLabel({ className, currency, value }: CurrencyLabelProps) {
  return (
    <div className={className}>
      {getCurrencyUnit(currency)} {toComma(value)}
    </div>
  );
}

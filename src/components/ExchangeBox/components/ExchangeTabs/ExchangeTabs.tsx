'use client';
import { Button } from '@/components/common/Button';
import { ExchangeType } from '../../exchangebox.define';
import { useExchangeTabs } from './useExchangeTabs';
import { cn } from '@/utils/tailwind';

interface ExchangeTabs {
  tabType: ExchangeType;
  onChangeTab: (type: ExchangeType) => void;
}

export function ExchangeTabs({ tabType, onChangeTab }: ExchangeTabs) {
  const {
    handler: { handleClickTab },
  } = useExchangeTabs({ onChangeTab });
  return (
    <div className="flex h-[83px] gap-3 rounded-2xl border border-gray-300 bg-white p-3">
      <Button
        className={cn('w-[264px]', tabType !== 'buy' && 'text-buy-red-disabled')}
        color="red"
        variant={tabType === 'buy' ? 'contained' : 'outlined'}
        onClick={handleClickTab('buy')}
      >
        살래요
      </Button>

      <Button
        className={cn('w-[264px]', tabType !== 'sell' && 'text-sell-blue-disabled')}
        color="blue"
        variant={tabType === 'sell' ? 'contained' : 'outlined'}
        onClick={handleClickTab('sell')}
      >
        팔래요
      </Button>
    </div>
  );
}

'use client';
import { cn } from '@/utils/tailwind';
import { Box } from '@/components/common/Box';
import { Button } from '@/components/common/Button';
import { Divide } from '@/components/common/Divide';
import { Input } from '@/components/common/Input';
import { ExchangeTabs } from './components/ExchangeTabs';
import { useExchangeBox } from './useExchangeBox';
import { getCurrencyUnitLabel, toComma } from '@/utils/currency';
import { CurrencyMenuButton } from './components/CurrencyMenuButton';
import { ArrowDownIcon } from '@/icons/ArrowDownIcon';
import { ExchangeTypeContent } from './exchangebox.define';

export function ExchangeBox() {
  const {
    exchangeType,
    currency,
    forexAmount,
    orderQuote,
    handler: { handleChangeCurrency, handleClickTab, handleChangeForexAmount, handleClickOrder },
  } = useExchangeBox();

  const { amountLabel, actionText, priceText, priceColor } = ExchangeTypeContent[exchangeType];

  return (
    <Box className="flex h-[787px] w-[628px] flex-col gap-8" color="gray">
      <div className="flex flex-col gap-4">
        <CurrencyMenuButton currency={currency} onChangeCurrency={handleChangeCurrency} />
        <ExchangeTabs tabType={exchangeType} onChangeTab={handleClickTab} />
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <div className="flex flex-1 flex-col items-center gap-4">
          <Input
            inputContainerClassName="w-[564px]"
            className="text-end"
            label={amountLabel}
            prefixProps={{
              position: 'right',
              component: (
                <span className="font-medium-20 text-gray-600">
                  {getCurrencyUnitLabel(currency!)} {actionText}
                </span>
              ),
            }}
            value={forexAmount}
            onChange={handleChangeForexAmount}
          />

          <ArrowDownIcon className="size-9" />

          <Input
            inputContainerClassName="w-[564px]"
            className="text-end"
            label="필요 원화"
            prefixProps={{
              position: 'right',
              component: <span className={cn('font-bold-20', priceColor)}>{priceText}</span>,
            }}
            value={toComma(orderQuote?.krwAmount ?? 0)}
            readOnly
          />
        </div>

        <Divide />

        <div className="flex justify-between text-gray-600">
          <div className="font-medium-20">적용 환율</div>
          <div className="font-semibold-20">
            1 {currency} = {toComma(orderQuote?.appliedRate ?? 0)}원
          </div>
        </div>

        <Button className="w-[564px]" onClick={handleClickOrder}>
          환전하기
        </Button>
      </div>
    </Box>
  );
}

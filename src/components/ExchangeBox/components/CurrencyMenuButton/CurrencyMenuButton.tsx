'use client';
import { CurrencyType } from '@/apis/interfaces/currency';
import { useCurrencyMenuButton } from './useCurrencyMenuButton';
import { Button } from '@/components/common/Button';
import { OverlayPanel } from '@/components/common/OverlayPanel';
import { useRef, useState } from 'react';
import { OverlayPanelHandler } from '@/components/common/OverlayPanel/overlayPanel.define';
import { USAIcon } from '@/icons/USAIcon';
import { JapanIcon } from '@/icons/JapanIcon';
import { getCurrencyCountryLabel } from '@/utils/currency';
import { Divide } from '@/components/common/Divide';

interface CurrencyMenuProps {
  currency?: CurrencyType;
  onChangeCurrency: (currency?: CurrencyType) => void;
}

export function CurrencyMenuButton({ currency, onChangeCurrency }: CurrencyMenuProps) {
  const { targetRef, overlayRef, currencies, getCountryIcon } = useCurrencyMenuButton();

  return (
    <>
      <Button ref={targetRef} className="size-fit p-0" variant="outlined" onClick={e => overlayRef.current?.toggle(e)}>
        <div className="flex items-center">
          {getCountryIcon(currency)}
          <div className="font-bold-24 text-gray-800">{currency} 환전하기</div>
        </div>
      </Button>

      <OverlayPanel ref={overlayRef} relativeGap={10}>
        <div className="flex w-fit flex-col rounded-[10px] border border-gray-200 bg-white">
          {currencies.map(currency => (
            <Button
              key={currency}
              className="font-medium-14 h-11 w-[140px] p-0 text-gray-700"
              variant="outlined"
              onClick={() => onChangeCurrency(currency)}
            >
              <div className="flex items-center justify-center gap-3">
                {getCountryIcon(currency)}
                <div>
                  {getCurrencyCountryLabel(currency)} {currency}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </OverlayPanel>
    </>
  );
}

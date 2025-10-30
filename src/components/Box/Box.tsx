import { PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwind';
import { BOX_COLOR_CLASSES, Color } from './box.define';

interface BoxProps extends PropsWithChildren {
  className?: string;
  color?: Color;
}

export function Box({ children, className, color = 'white' }: BoxProps) {
  return (
    <div className={cn(BOX_COLOR_CLASSES[color], 'rounded-[20px] border border-gray-300 px-8 py-6', className)}>
      {children}
    </div>
  );
}

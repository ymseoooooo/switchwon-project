import { PropsWithChildren } from 'react';

import { cn } from '@/utils/tailwind';
import { IconBaseProps } from './icon.define';

type IconProps = PropsWithChildren<IconBaseProps>;

export function Icon({ className, children, onClick }: IconProps) {
  return (
    <div
      className={cn('flex items-center justify-center', onClick ? 'cursor-pointer' : 'cursor-default', className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

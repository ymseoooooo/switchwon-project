import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import { buttonSizeMap, buttonVariantMap, Color, Size, Variant } from './button.define';
import { cn } from '@/utils/tailwind';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'color'> {
  children?: ReactNode;
  size?: Size;
  variant?: Variant;
  color?: Color;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, disabled, children, size = 'md', variant = 'contained', color = 'darkNavy', ...restProps } = props;

  return (
    <button
      ref={ref}
      {...restProps}
      className={cn(
        buttonVariantMap[variant][color],
        buttonSizeMap[size],
        'font-bold-20',
        'rounded-xl',
        disabled && 'cursor-not-allowed',
        'enabled:cursor-pointer',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

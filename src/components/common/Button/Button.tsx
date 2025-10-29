import { ButtonHTMLAttributes, ReactNode } from 'react';

import {
  BUTTON_COLOR_CLASSES,
  BUTTON_SIZE_CLASSES,
  BUTTON_VARIANT_CLASSES,
  Color,
  Size,
  Variant,
} from './button.define';
import { cn } from '@/utils/tailwind';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'color'> {
  children?: ReactNode;
  size?: Size;
  variant?: Variant;
  color?: Color;
}

export function Button({
  className,
  disabled,
  children,
  size = 'md',
  variant = 'contained',
  color = 'darkNavy',
  ...restProps
}: ButtonProps) {
  return (
    <button
      {...restProps}
      className={cn(
        BUTTON_VARIANT_CLASSES[variant],
        BUTTON_COLOR_CLASSES[color],
        BUTTON_SIZE_CLASSES[size],
        'text-button-text-white',
        'rounded-xl',
        disabled && 'cursor-not-allowed',
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

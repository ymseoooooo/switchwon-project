import { InputHTMLAttributes, ReactNode, useId } from 'react';

import { cn } from '@/utils/tailwind';
import { INPUT_SIZE_CLASSES, Size } from './input.define';

interface PrefixProps {
  position: 'left' | 'right';
  component: ReactNode;
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'width'> {
  inputContainerClassName?: string;
  size?: Size;
  label?: string;
  prefixProps?: PrefixProps;
}

export function Input({
  inputContainerClassName,
  size = 'md',
  className,
  label,
  prefixProps,
  readOnly,
  ...restProps
}: InputProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-3">
      {label && <div className="font-medium-20 h-[27px] text-gray-600">{label}</div>}
      <div
        className={cn(
          INPUT_SIZE_CLASSES[size],
          'flex items-center justify-center gap-[10px] p-6',
          'rounded-xl border',
          readOnly ? 'border-gray-500 bg-gray-100' : 'border-gray-700 bg-white',
          inputContainerClassName
        )}
      >
        {prefixProps?.position === 'left' && prefixProps.component}

        <input
          id={id}
          {...restProps}
          className={cn('flex-1 outline-none', 'font-semibold-20 text-gray-600', className)}
          readOnly={readOnly}
        />

        {prefixProps?.position === 'right' && prefixProps.component}
      </div>
    </div>
  );
}

// figma Button variant에 따른 스타일 정의
export type Variant = 'contained' | 'outlined';
export type Color = 'darkNavy' | 'red' | 'blue';
export const buttonVariantMap: Record<Variant, Record<Color, string>> = {
  contained: {
    darkNavy: 'bg-button-dark-navy text-white',
    red: 'bg-button-red text-white',
    blue: 'bg-button-blue text-white',
  },
  outlined: {
    darkNavy: 'text-button-dark-navy',
    red: 'text-button-red',
    blue: 'text-button-blue',
  },
};

// figma Button size에 따른 스타일 정의
export type Size = 'sm' | 'md' | 'lg';
export const buttonSizeMap: Record<Size, string> = {
  sm: 'h-[43px] px-3 py-2',
  md: 'h-[59px] px-[18px] py-4',
  lg: 'h-[77px] px-[10px] py-6',
};

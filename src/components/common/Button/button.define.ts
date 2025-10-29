// figma Button variant에 따른 스타일 정의
export type Variant = 'contained';
export const BUTTON_VARIANT_CLASSES: Record<Variant, string> = {
  contained: '',
};

// figma Button color에 따른 스타일 정의
export type Color = 'darkNavy' | 'red' | 'blue';
export const BUTTON_COLOR_CLASSES: Record<Color, string> = {
  darkNavy: 'bg-button-dark-navy',
  red: 'bg-button-red',
  blue: 'bg-button-blue',
};

// figma Button size에 따른 스타일 정의
export type Size = 'sm' | 'md' | 'lg';
export const BUTTON_SIZE_CLASSES: Record<Size, string> = {
  sm: 'h-[43px] px-3 py-2',
  md: 'h-[59px] px-[18px] py-4',
  lg: 'h-[77px] px-[10px] py-6',
};

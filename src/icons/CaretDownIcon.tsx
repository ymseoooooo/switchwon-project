import { Icon, IconBaseProps } from '@/components/common/Icon';
import { cn } from '@/utils/tailwind';

type CaretDownIconProps = IconBaseProps;

export function CaretDownIcon(props: CaretDownIconProps) {
  const { className } = props;

  return (
    <Icon {...props}>
      <svg
        className={cn('fill-sell-blue size-6', className)}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <path
          d="M5.29,9.644L5.289,9.646l0.016,0.017C5.314,9.671,5.324,9.68,5.333,9.689l2.541,2.509l3.339,3.397
	c0.179,0.24,0.463,0.397,0.786,0.397c0.291,0,0.549-0.129,0.729-0.329h0.004l3.39-3.466l2.553-2.512V9.686
	c0.184-0.178,0.297-0.427,0.297-0.704C18.971,8.44,18.531,8,17.99,8h-5.992H6.011C5.468,8,5.029,8.44,5.029,8.981
	C5.029,9.238,5.13,9.469,5.29,9.644z"
        />
      </svg>
    </Icon>
  );
}

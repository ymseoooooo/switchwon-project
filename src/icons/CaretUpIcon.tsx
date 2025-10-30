import { Icon, IconBaseProps } from '@/components/common/Icon';
import { cn } from '@/utils/tailwind';

type CaretUpIconProps = IconBaseProps;

export function CaretUpIcon(props: CaretUpIconProps) {
  const { className } = props;

  return (
    <Icon {...props}>
      <svg
        className={cn('fill-buy-red size-6', className)}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <path
          d="M18.711,14.349l0.001-0.003l-0.016-0.017c-0.01-0.009-0.02-0.018-0.028-0.026l-2.541-2.509l-3.338-3.397
	c-0.179-0.24-0.463-0.397-0.786-0.397c-0.291,0-0.549,0.129-0.729,0.329H11.27l-3.39,3.466l-2.553,2.512v0.001
	c-0.184,0.178-0.297,0.427-0.297,0.704c0,0.541,0.439,0.981,0.98,0.981h5.992h5.986c0.543,0,0.982-0.44,0.982-0.981
	C18.972,14.754,18.871,14.522,18.711,14.349z"
        />
      </svg>
    </Icon>
  );
}

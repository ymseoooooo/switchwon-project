import { Icon, IconBaseProps } from '@/components/common/Icon';
import { cn } from '@/utils/tailwind';

type JapanIconProps = IconBaseProps;

export function JapanIcon(props: JapanIconProps) {
  const { className } = props;

  return (
    <Icon {...props}>
      <svg
        className={cn('h-6 w-6', className)}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <g>
          <circle
            fill="none"
            stroke="#F1F2F4"
            strokeWidth="0.8"
            strokeMiterlimit="10"
            cx="11.911"
            cy="11.999"
            r="8.465"
          />
          <circle fill="#BC2B30" cx="11.91" cy="11.935" r="3.875" />
        </g>
        <rect
          x="-14.458"
          y="3.313"
          fill="none"
          stroke="#F1F2F4"
          strokeWidth="0.5"
          strokeMiterlimit="10"
          width="7.938"
          height="5.688"
        />
      </svg>
    </Icon>
  );
}

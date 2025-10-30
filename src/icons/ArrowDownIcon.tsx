import { Icon, IconBaseProps } from '@/components/common/Icon';
import { cn } from '@/utils/tailwind';

type ArrowDownIconProps = IconBaseProps;

export function ArrowDownIcon(props: ArrowDownIconProps) {
  const { className } = props;

  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={cn('size-6', className)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
      </svg>
    </Icon>
  );
}

import { Icon, IconBaseProps } from '@/components/common/Icon';
import { cn } from '@/utils/tailwind';

type LogoIconProps = IconBaseProps;

export function LogoIcon(props: LogoIconProps) {
  const { className } = props;

  return (
    <Icon {...props}>
      <svg
        className={cn('size-20', className)}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 841.89 841.89"
      >
        <g>
          <circle className="fill-blue-500" cx="185.457" cy="671.999" r="103.644" />
          <path
            className="fill-blue-500"
            d="M92.458,72.489c-2.361,0-4.715,0.032-7.071,0.054v144.85c310.201,4.12,553.65,242.233,558.04,554.068 h143.745c0.007-1.409,0.034-2.813,0.034-4.226C787.206,383.542,476.152,72.489,92.458,72.489z"
          />
          <path
            className="fill-blue-500"
            d="M92.458,308.413c-2.364,0-4.715,0.049-7.071,0.086v143.659c2.839-0.074,5.676-0.11,8.534-0.157 c179.626-2.833,314.426,137.948,314.426,310.313c0,3.061-0.056,6.107-0.145,9.146h143.025c0.015-1.409,0.054-2.813,0.054-4.226 C551.281,513.83,345.862,308.413,92.458,308.413z"
          />
        </g>
      </svg>
    </Icon>
  );
}

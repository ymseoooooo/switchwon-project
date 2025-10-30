import Link from 'next/link';

import { cn } from '@/utils/tailwind';
import type { MenuItem } from '@/defines/menu';

interface MenuItemProps {
  menuItem: MenuItem;
  isSelected?: boolean;
}

export function MenuItem({ menuItem, isSelected }: MenuItemProps) {
  const { label, path } = menuItem;
  return (
    <li className={cn('px-2 py-3', isSelected ? 'font-bold-20' : 'font-medium-20 text-menu-disabled')}>
      <Link href={path}>{label}</Link>
    </li>
  );
}

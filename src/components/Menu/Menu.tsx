'use client';
import { usePathname } from 'next/navigation';
import { MenuItem } from './MenuItem';
import { menuInfos } from '@/constants/menu';

export function Menu() {
  const currentPath = usePathname();

  return (
    <ul className="flex gap-2">
      {menuInfos.map(menu => (
        <MenuItem key={menu.path} menuItem={menu} isSelected={menu.path === currentPath} />
      ))}
    </ul>
  );
}

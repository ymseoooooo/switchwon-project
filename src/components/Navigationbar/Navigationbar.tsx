'use client';
import { LogoIcon } from '@/icons/LogoIcon';
import { Button } from '@/components/common/Button';
import { Menu } from '@/components/Menu';
import { useNavigationbar } from './useNavigationbar';

export function Navigationbar() {
  const {
    handler: { handleClickLogout },
  } = useNavigationbar();

  return (
    <header>
      <nav className="h-[75px] w-full border-b border-gray-300 px-10 py-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <LogoIcon className="size-6" />
            <div className="font-bold-24">Exchange app</div>
          </div>

          <div className="flex items-center gap-10">
            <Menu />

            <Button className="font-semibold-20" color="blue" size="sm" onClick={handleClickLogout}>
              Log out
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

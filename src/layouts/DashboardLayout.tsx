import { toggleSideNavAtom } from '@/atoms/sideNav.atom';
import AsideNavigation from '@/components/layouts/AsideNavigation';
import TopHeaderRightOptions from '@/components/layouts/TopHeaderRightOptions';
import { cn } from '@/lib/utils';
import { useAtom } from 'jotai';
import React from 'react';
import { Link } from 'react-router-dom';

type TLayout = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: TLayout) => {
  const [isToggled, setToggle] = useAtom(toggleSideNavAtom);

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='flex fixed top-0 right-0 left-0 z-30 justify-between items-center h-[58px] bg-zinc-800 border-b border-zinc-700'>
        <Link to='/dashboard' className='flex items-center text-zinc-800 gap-2'>
          <div className='w-full max-w-40 aspect-auto'>
            <img
              src='/patronyme.png'
              className='w-full h-full'
              alt='Patronyme DCOM'
            />
          </div>
        </Link>
        <TopHeaderRightOptions />
      </header>
      <div className='flex flex-1'>
        <AsideNavigation />
        <main
          className={cn(
            'bg-secondary dark:bg-background ml-[56px]  pt-[58px] text-foreground transition-all overflow-auto flex-1',
            !isToggled && 'sm:ml-[207px]'
          )}
        >
          {children}
        </main>
      </div>
      {/* <footer>DASHBOARD FOOTER</footer> */}
    </div>
  );
};

export default DashboardLayout;

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Button } from '@/components/button';

import Items from './navbar-navigation.json';

export const Navbar = () => {
  const { items } = Items;
  return (
    <>
      <nav className={cn('fixed flex h-20 w-full border bg-white')}>
        <div
          className={cn(
            'mx-auto flex w-full max-w-7xl items-center justify-between'
          )}
        >
          <div className={cn('flex items-center gap-3')}>
            <Image alt='logo' src='/svg/Logo.svg' width={100} height={100} />
            {items.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className={cn(
                  'text-mediumBlue font-inter rounded-md px-3 py-2 text-base hover:bg-gray-100 hover:text-gray-800'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className={cn('flex items-center gap-7')}>
            <a className={cn('font-inter text-mediumBlue text-base')} href='#'>
              Log in
            </a>
            <Button size='sm' text='Sign up' />
          </div>
        </div>
      </nav>
    </>
  );
};

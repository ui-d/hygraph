import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/button';
import { Container } from '@/components/global/container';

import Items from './navbar-navigation.json';

export const Navbar = () => {
  const { items } = Items;
  return (
    <nav className={cn('border-light-gray fixed flex w-full border bg-white')}>
      <Container>
        <div className={cn('flex h-20 w-full items-center justify-between')}>
          <div className={cn('flex items-center gap-3')}>
            <Link href='/'>
              <Image alt='logo' src='/svg/Logo.svg' width={100} height={100} />
            </Link>
            {items.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className={cn(
                  'text-medium-blue font-inter hover:bg-gray hidden rounded-md px-3 py-2 text-base hover:text-gray-800 md:block'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className={cn('flex items-center gap-4')}>
            <a
              className={cn(
                'font-inter text-medium-blue hover:bg-gray hidden rounded-md px-3 py-2 text-base md:block'
              )}
              href='#'
            >
              Log in
            </a>
            <Button url='#' size='sm' text='Sign up' />
          </div>
        </div>
      </Container>
    </nav>
  );
};

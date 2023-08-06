import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Button } from '@/components/button';
import { Container } from '@/components/global/container';

import Items from './navbar-navigation.json';

export const Navbar = () => {
  const { items } = Items;

  return (
    <header
      className={cn('border-light-gray fixed flex w-full border bg-white')}
    >
      <Container>
        <nav className={cn('flex h-20 w-full items-center justify-between')}>
          <div className={cn('flex items-center gap-3')}>
            <div className={cn('flex-shrink-0')}>
              <Link href='/'>
                <Image
                  alt='Logo'
                  src='/svg/Logo.svg'
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <ul className={cn('flex gap-3')}>
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className={cn(
                      'text-medium-blue font-inter hover:bg-gray hidden rounded-md px-3 py-2 text-base hover:text-gray-800 md:block'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={cn('flex items-center gap-4')}>
            <Link
              className={cn(
                'font-inter text-medium-blue hover:bg-gray whitespace-nowrap rounded-md px-3 py-2 text-base md:block'
              )}
              href='#'
            >
              Log in
            </Link>
            <Button url='#' size='sm' text='Sign up' />
          </div>
        </nav>
      </Container>
    </header>
  );
};

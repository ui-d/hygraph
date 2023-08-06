import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Container } from '@/components/global/container';

import navigationItems from './footer-navigation.json';

export const Footer = () => {
  const { items } = navigationItems;
  return (
    <Container>
      <footer className={cn('flex w-full')}>
        <div
          className={cn(
            'border-light-gray mx-auto flex w-full flex-col-reverse items-center justify-between gap-12 border-t py-8 sm:gap-8 md:flex-row'
          )}
        >
          <p
            className={cn(
              'font-inter text-light-blue text-center text-base sm:text-left'
            )}
          >
            © 2023 Acme Co. All rights reserved.
          </p>

          <nav>
            <ul className={cn('flex items-center gap-4')}>
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className={cn(
                      'font-inter text-light-blue hover:text-medium-blue text-base'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
    </Container>
  );
};

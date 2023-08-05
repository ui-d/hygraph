import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Container } from '@/components/global/container';

import navigationItems from './footer-navigation.json';

export const Footer = () => {
  const { items } = navigationItems;
  return (
    <Container>
      <section className={cn('flex w-full')}>
        <div
          className={cn(
            'border-light-gray mx-auto flex w-full flex-col-reverse items-center justify-between gap-8 border-t py-8 md:flex-row'
          )}
        >
          <p className={cn('font-inter text-light-blue text-base')}>
            © 2023 Acme Co. All rights reserved.
          </p>

          <div className={cn('flex items-center gap-4')}>
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={cn(
                  'font-inter text-light-blue hover:text-medium-blue text-base'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

import { cn } from '@/lib/utils';

import Items from './footer-navigation.json';

export const Footer = () => {
  const { items } = Items;
  return (
    <>
      <nav className={cn('fixed flex h-20 w-full bg-white')}>
        <div
          className={cn(
            'mx-auto flex w-full max-w-7xl items-center justify-between border-t'
          )}
        >
          <p className={cn('font-inter text-lightBlue text-base')}>
            © 2023 Acme Co. All rights reserved.
          </p>

          <div className={cn('flex items-center gap-4')}>
            {items.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={cn(
                  'font-inter text-lightBlue text-base hover:text-gray-900'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

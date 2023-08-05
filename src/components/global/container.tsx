import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type ContainerProps = {
  children: ReactNode;
};
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-8 md:px-8')}>
      {children}
    </div>
  );
};

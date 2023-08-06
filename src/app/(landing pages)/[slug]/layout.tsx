import * as React from 'react';

import { cn } from '@/lib/utils';

import { Footer } from '@/components/global/footer';
import { Navbar } from '@/components/global/navbar';

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn('bg-extra-light-gray')}>
      <Navbar />
      <div className={cn('pt-20')}>
        {children}
        <Footer />
      </div>
    </div>
  );
}

import { Metadata } from 'next';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { Footer } from '@/components/global/footer';
import { Navbar } from '@/components/global/navbar';

export const metadata: Metadata = {
  title: 'Components',
  description: 'Pre-built components with awesome default',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={cn('bg-extra-light-gray')}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

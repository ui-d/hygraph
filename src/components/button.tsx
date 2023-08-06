import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex whitespace-nowrap py-3 px-5 font-inter items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 hover:bg-medium-blue focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        default: 'text-white bg-purple',
      },
      size: {
        sm: 'text-base',
        md: 'sm:h-11 sm:py-6 sm:px-5 text-base',
        lg: 'sm:py-3 sm:px-8 text-base sm:text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  size: 'sm' | 'md' | 'lg';
  text: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  text,
  url,
}) => {
  return (
    <Link
      href={url}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {text}
    </Link>
  );
};

export { Button, buttonVariants };

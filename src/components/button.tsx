import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex font-inter items-center justify-center rounded-lg text-base transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        default: 'text-white bg-purple',
      },
      size: {
        sm: 'h-11 py-2 px-5',
        md: 'h-9 px-2 ',
        lg: 'h-11 px-8 ',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  size: 'sm' | 'md' | 'lg';
  text: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, text }) => {
    return (
      <Link
        href='#'
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {text}
      </Link>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

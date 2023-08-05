import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex font-inter items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 hover:bg-medium-blue focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        default: 'text-white bg-purple',
      },
      size: {
        sm: 'h-11 py-2 px-5 text-base',
        md: 'py-2 px-5 md:h-11 md:p-6 text-base',
        lg: 'py-2 px-5 md:py-3 md:px-8 text-base md:text-lg',
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
  url: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, text, url }) => {
    return (
      <Link
        href={url}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {text}
      </Link>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

import type { FC, PropsWithChildren } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'rounded-lg font-bold text-heading-md inline-flex items-center justify-center disabled:opacity-50',
  {
    variants: {
      variant: {
        filled:
          'px-4 py-2 text-neutral-100 bg-primary-60 border-2 border-primary-60 hover:bg-primary-40 hover:border-primary-40 focus:border-primary-20 focus:bg-primary-40',
        link: 'p-2 text-accent-50 hover:underline border-2 border-transparent focus:border-accent-50',
      },
    },
    defaultVariants: {
      variant: 'filled',
    },
  },
);

export type ButtonProps = PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {};

export const Button: FC<ButtonProps> = ({
  className,
  variant,
  children,
  ...props
}) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

import type { FC, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type BookmarkFilledProps = PropsWithChildren & {
  className?: string;
};

export const BookmarkFilled: FC<BookmarkFilledProps> = ({ className }) => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 30 30'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('fill-black', className)}
    >
      <path d='M6 5.25V25.8609C6 26.4891 6.51094 27 7.13906 27C7.37344 27 7.60312 26.9297 7.79531 26.7938L15 21.75L22.2047 26.7938C22.3969 26.9297 22.6266 27 22.8609 27C23.4891 27 24 26.4891 24 25.8609V5.25C24 4.00781 22.9922 3 21.75 3H8.25C7.00781 3 6 4.00781 6 5.25Z' />
    </svg>
  );
};

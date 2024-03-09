import { useState, type FC } from 'react';

import { cn } from '@/lib/utils';

type RadioButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  checked?: boolean;
};

export const RadioButton: FC<RadioButtonProps> = ({
  className,
  checked = false,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={cn(
        'border-transparent flex items-center justify-center rounded-lg border-4 p-[2px] focus:border-accent-50',
        className,
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      <div className='flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-accent-50'>
        <div
          className={cn(
            'h-[12px] w-[12px] rounded-full',
            (hover || checked) && 'bg-accent-50',
          )}
        />
      </div>
    </button>
  );
};

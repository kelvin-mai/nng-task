import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const numberToDate = (n: number) => {
  return new Date(n * 1000);
};

export const dayOfWeek = (d: Date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[d.getDay()];
};

export const toTimeText = (d: Date) => {
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const meridian = hours / 12 < 1 ? 'am' : 'pm';
  const minuteText =
    minutes > 0 ? (minutes < 10 ? `:0${minutes}` : `:${minutes}`) : '';
  return `${hours % 12}${minuteText}${meridian}`;
};

import type { FC } from 'react';

import type { Course, TimezoneIdentifier } from '@/mock/course';
import { dayOfWeek, numberToDate, toTimeText } from '@/lib/utils';
import { RadioButton } from '../common';
import { CourseCardPricing } from './pricing';
import { CourseCardInstructor } from './instructor';

type CourseCardProps = Course & {
  selected: boolean;
  onSelect: (id: number) => void;
};

export const CourseCard: FC<CourseCardProps> = ({
  id,
  dates,
  instructors,
  location,
  pricing,
  selected,
  onSelect,
}) => {
  const locationText = (location: { timezone: TimezoneIdentifier }) => {
    switch (location.timezone) {
      case 'America/New_York':
        return 'New York City';
      case 'America/Los_Angeles':
        return 'Los Angeles';
      // TODO: add exhaustive pattern matching for all timezones
      default:
        return 'Unknown';
    }
  };

  const timeText = (dates: [number, number][]) => {
    // TODO: mockup assumes same start and end times for each date
    const [date] = dates;
    const [start, end] = date.map(numberToDate);
    return `${toTimeText(start)} - ${toTimeText(end)}`;
  };

  const daysText = (dates: [number, number][]) => {
    const toDates = dates.flatMap((d) => d.map(numberToDate));
    const daysOfWeek = [...new Set(toDates.map(dayOfWeek))];
    const days = [...new Set(toDates.map((d) => d.getDay()))];
    // TODO: mockup assumes same month for all dates
    const month = toDates[0].toLocaleString('default', { month: 'long' });
    return `${daysOfWeek.join(' & ')}, ${month} ${days.join(' & ')}`;
  };

  return (
    <div
      className='rounded-md border-2 border-neutral-80 px-6 py-8 hover:border-primary-20 focus:border-accent-50'
      onClick={() => onSelect(id)}
    >
      <div className='flex items-center'>
        <RadioButton onClick={() => onSelect(id)} checked={selected} />
        <p className='ml-2 text-heading-sm font-bold text-primary-30'>
          Virtual Course
        </p>
      </div>
      <div className='grid grid-cols-[3fr_1fr] gap-8'>
        <div className='pl-10'>
          <h3 className='text-title-sm font-bold'>{daysText(dates)}</h3>
          <p className='text-title-sm'>{timeText(dates)}</p>
          <p className='text-body-md'>{locationText(location)} Time</p>
          <CourseCardPricing {...pricing} />
        </div>
        <CourseCardInstructor instructors={instructors} />
      </div>
    </div>
  );
};

import type { FC } from 'react';

import type { Pricing } from '@/mock/course';
import { numberToDate } from '@/lib/utils';

type CourseCardPricingProps = Pricing;

type CurrencySymbol = {
  symbol: string;
  designation: 'prefix' | 'suffix';
};

export const toCurrencySymbol = (code: string): CurrencySymbol => {
  switch (code) {
    case 'EUR':
      return { symbol: '€', designation: 'prefix' };
    case 'AUD':
      return { symbol: '£', designation: 'prefix' };
    default:
      return { symbol: '$', designation: 'prefix' };
  }
};

export const CourseCardPricing: FC<CourseCardPricingProps> = ({
  amount,
  currency: currencyCode,
  valid_until,
}) => {
  const currency = toCurrencySymbol(currencyCode);
  const validUntil = numberToDate(valid_until);
  return (
    <p className='mt-4'>
      <span className='font-bold'>
        {currency.designation === 'prefix' && currency.symbol}
        {amount}
        {currency.designation === 'suffix' && currency.symbol}
      </span>{' '}
      Until {validUntil.toLocaleString('default', { month: 'long' })}{' '}
      {validUntil.getDay()}
    </p>
  );
};

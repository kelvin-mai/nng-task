export type Instructor = {
  first_name: string;
  last_name: string;
  portrait_image: string;
};

export type TimezoneIdentifier = 'America/New_York' | 'America/Los_Angeles'; // incomplete list

export type CurrencyISOCode = 'USD' | 'AUD' | 'EUR' | 'GBP'; //incomplete list

export type Pricing = {
  amount: number;
  currency: CurrencyISOCode;
  valid_until: number;
};

export type Course = {
  id: number;
  dates: [number, number][];
  instructors: Instructor[];
  location: {
    timezone: TimezoneIdentifier;
  };
  pricing: Pricing;
};

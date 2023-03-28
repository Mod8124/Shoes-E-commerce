import { TArrayString } from '@/interface/interface';

export const featured = () => {
  const TYPES: TArrayString = ['Running', 'Soccer', 'Lifestyle', 'Training', 'Skateboarding', 'Walking', 'Classic'];
  const BRANDS: TArrayString = ['FUTURE COMPANY', 'SNEAKER COMPANY', 'NEON COMPANY', 'RS-2K', 'CANVERSE'];

  return {
    TYPES,
    BRANDS,
  };
};

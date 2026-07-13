import * as React from 'react';

export interface Brand {
  id: string;
  name: string;
  role: string;
  tagline: string;
  domain: string;
  desc: string;
  parent?: boolean;
}

export interface BrandFamilyProps {
  /** Called with a Brand object when a brand card is clicked. */
  onOpen?: (brand: Brand) => void;
}

/** Responsive grid of the four sub-brand cards. */
export declare function BrandFamily(props: BrandFamilyProps): React.ReactElement;

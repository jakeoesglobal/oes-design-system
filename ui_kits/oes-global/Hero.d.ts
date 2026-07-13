import * as React from 'react';

export interface HeroProps {
  /** Called with a section id when a hero CTA is clicked. */
  onNav?: (id: string) => void;
}

/** Deep-navy gradient hero with icon watermark, master headline, and a stat strip. */
export declare function Hero(props: HeroProps): React.ReactElement;

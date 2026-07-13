import * as React from 'react';

export interface HeaderProps {
  /** Called with a section id ('home' | 'family' | 'value' | 'contact') when a nav item is clicked. */
  onNav?: (id: string) => void;
  /** Currently active section id, for highlighting. */
  active?: string;
}

/** Sticky top navigation. Transparent over the hero, frosted-white once scrolled. */
export declare function Header(props: HeaderProps): React.ReactElement;

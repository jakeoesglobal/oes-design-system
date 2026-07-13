import * as React from 'react';

export interface FooterProps {
  /** Called when the contact form is submitted. */
  onSubmit?: () => void;
}

/** Deep-gradient contact band with a message form, plus the navy footer bar. */
export declare function Footer(props: FooterProps): React.ReactElement;

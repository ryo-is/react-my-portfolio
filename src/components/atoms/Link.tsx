import React from 'react';

export type LinkProps = {
  to: string;
  children: React.ReactNode;
};

export const Link = ({ to, children }: LinkProps): JSX.Element => {
  return (
    <a className="mx-4" href={to}>
      {children}
    </a>
  );
};

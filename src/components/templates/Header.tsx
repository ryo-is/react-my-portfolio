import React from 'react';
import { Nav } from '@organisms/Nav';

export const Header = (): JSX.Element => {
  return (
    <header className="h-header flex items-center px-4 text-2xl font-bold">
      <Nav />
    </header>
  );
};

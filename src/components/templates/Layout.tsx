import React from 'react';
import { Header } from '@templates/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="bg-gray-900 h-screen text-gray-200">
      <Header />
      <div className="h-main text-2xl">
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
};

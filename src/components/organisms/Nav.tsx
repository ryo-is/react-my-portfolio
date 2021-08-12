import React from 'react';
import { HomeLink } from '@molecules/HomeLink';
import { AboutLink } from '@molecules/AboutLink';

export const Nav = (): JSX.Element => {
  return (
    <>
      <HomeLink />
      <AboutLink />
    </>
  );
};

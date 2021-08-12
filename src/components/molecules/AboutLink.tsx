import React from 'react';
import { Link } from '@atoms/Link';
import { MdInfo } from 'react-icons/md';

export const AboutLink = (): JSX.Element => {
  return (
    <Link to="/about">
      <div className="flex items-center">
        <MdInfo />
        <span className="ml-1">About</span>
      </div>
    </Link>
  );
};

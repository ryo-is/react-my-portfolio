import React from 'react';
import { Link } from '@atoms/Link';
import { MdHome } from 'react-icons/md';

export const HomeLink = (): JSX.Element => {
  return (
    <Link to="/">
      <div className="flex items-center">
        <MdHome />
        <span className="ml-1">Home</span>
      </div>
    </Link>
  );
};

import React from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
  buttonText: string;
};

export const Button = (props: Props): JSX.Element => {
  return (
    <button
      className="py-2 px-6 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none m-2"
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
};

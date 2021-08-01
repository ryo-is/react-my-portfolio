import React from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
  buttonText: string;
};

export const Button = (props: Props): JSX.Element => {
  return <button onClick={props.onClick}>{props.buttonText}</button>;
};

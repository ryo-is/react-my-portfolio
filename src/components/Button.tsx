import React from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: any;
  buttonText: string;
};

export class Button extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <button onClick={this.props.onClick}>{this.props.buttonText}</button>
    );
  }
}

import React from 'react';

type Prop = {
  onClick: any;
  buttonText: string;
};

export class Button extends React.Component<Prop> {
  render(): JSX.Element {
    return (
      <button onClick={this.props.onClick}>{this.props.buttonText}</button>
    );
  }
}

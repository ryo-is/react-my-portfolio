import React from 'react';
import logo from '../assets/logo.svg';
import './Home.css';

export class Home extends React.Component {
  state = {
    startText: 'Start React!!!!!',
  };
  render(): JSX.Element {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>{this.state.startText}</p>
        </header>
      </div>
    );
  }
}

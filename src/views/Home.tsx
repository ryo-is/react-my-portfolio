import React from 'react';
import logo from '../assets/logo.svg';
import './Home.css';
import { Button } from '../components/Button';

type ListItem = {
  id: number;
  text: string;
};

const createListItem = (items: ListItem[]) => {
  return items.map((item) => <li key={item.id.toString()}>{item.text}</li>);
};

export class Home extends React.Component {
  state = {
    startText: 'Start React!!!!!',
    listItems: [
      { id: 1, text: 'aaa' },
      { id: 2, text: 'bbb' },
      { id: 3, text: 'ccc' },
      { id: 4, text: 'ddd' },
      { id: 5, text: 'eee' },
    ],
    count: 0,
  };
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = (): void => {
    this.setState({ count: this.state.count - 1 });
  };
  render(): JSX.Element {
    const hidden = true;
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>{this.state.startText}</p>
          <p hidden={hidden}>hidden</p>
          <p hidden={!hidden}>dont hidden</p>
          <ul>{createListItem(this.state.listItems)}</ul>
          <p>{this.state.count}</p>
          <Button onClick={this.increment} buttonText="increment"></Button>
          <Button onClick={this.decrement} buttonText="decrement"></Button>
        </header>
      </div>
    );
  }
}

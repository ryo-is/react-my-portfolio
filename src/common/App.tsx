import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '../views/Home';

export class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

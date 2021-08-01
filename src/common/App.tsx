import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home } from '../views/Home';

export const App = (): JSX.Element => {
  return (
    <div className="bg-gray-900 h-screen text-gray-200">
      <Header />
      <div className="h-main text-2xl">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    </div>
  );
};

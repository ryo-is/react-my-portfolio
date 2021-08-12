import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from '@templates/Layout';
import { Home } from '@views/Home';
import { About } from '@views/About';

export const App = (): JSX.Element => {
  return (
    <Layout>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Router>
    </Layout>
  );
};

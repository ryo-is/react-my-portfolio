import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from '@views/Home';
import { Layout } from '@templates/Layout';

export const App = (): JSX.Element => {
  return (
    <Layout>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Layout>
  );
};

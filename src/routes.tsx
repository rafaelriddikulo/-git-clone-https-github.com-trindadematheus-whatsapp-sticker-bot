import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Loading from './pages/Loading';
import Connect from './pages/Connect';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Loading} />
          <Route path="/" exact component={Connect} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
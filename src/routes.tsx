import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Loading from './pages/Loading';
import Connect from './pages/Connect';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Loading} />
      <Route path="/connect" component={Connect} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;

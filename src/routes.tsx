import React from 'react';

import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import Loading from './pages/Loading';
import Connect from './pages/Connect';
import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Loading} />
        <Route path="/connect" exact component={Connect} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </>
  );
}

export default withRouter(Routes);
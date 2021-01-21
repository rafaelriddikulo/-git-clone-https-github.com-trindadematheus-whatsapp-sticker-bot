import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Connect from './pages/Connect';

const Routes: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Connect} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
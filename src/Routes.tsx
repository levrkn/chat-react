import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/chat" component={Chat} />
    <Redirect to="/login" />
  </Switch>
);

export default Routes;

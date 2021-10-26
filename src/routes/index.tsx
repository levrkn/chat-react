import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chat from '../components/pages/Chat';
import Login from '../components/pages/Login';
import SCREENS from './endpoints';

const Routes: FC = () => (
  <Switch>
    <Route path={SCREENS.SCREEN_LOGIN} exact>
      <Login />
    </Route>
    <Route path={SCREENS.SCREEN_CHAT} exact>
      <Chat />
    </Route>
    <Redirect to={SCREENS.SCREEN_LOGIN} />
  </Switch>
);

export default Routes;

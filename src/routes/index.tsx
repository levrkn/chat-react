import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Chat from '../components/pages/Chat';
import Login from '../components/pages/Login';
import Registration from '../components/pages/Registration';
import { $isAuth } from '../store/auth';
import SCREENS from './endpoints';

const Routes: FC = () => {
  const isAuth = useStore($isAuth);
  if (isAuth) {
    return (
      <Switch>
        <Route path={SCREENS.SCREEN_CHAT} exact>
          <Chat />
        </Route>
        <Redirect to={SCREENS.SCREEN_CHAT} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN} exact>
        <Login />
      </Route>
      <Route path={SCREENS.SCREEN_REGISTER} exact>
        <Registration />
      </Route>
      <Redirect to={SCREENS.SCREEN_LOGIN} />
    </Switch>
  );
};

export default Routes;

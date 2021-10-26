import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import LoginTemplate from '../templates/Login/LoginTemplate';

const Login: FC = () => {
  const history = useHistory();
  return (
    <LoginTemplate
      onSubmit={() => {
        history.push('./chat');
      }}
    />
  );
};

export default Login;

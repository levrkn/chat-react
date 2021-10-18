import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginTemplate from '../components/templates/Login/LoginTemplate';

const Login: React.FC = () => {
  const history = useHistory();
  return <LoginTemplate onSubmit={(e) => history.push('./chat')} />;
};

export default Login;

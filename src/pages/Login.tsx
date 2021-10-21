import React from 'react';
import { useHistory } from 'react-router-dom';
import LoginTemplate from '../components/templates/Login/LoginTemplate';

const Login: React.FC = () => {
  const history = useHistory();
  const onSubmit = (data: { userName: string; password: string }) => {
    console.log(data);
  };
  return (
    <LoginTemplate
      onSubmit={(data) => {
        history.push('./chat');
        onSubmit(data);
      }}
    />
  );
};

export default Login;

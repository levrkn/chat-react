import React from 'react';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import './LoginTemplate.scss';
import Logo from '../../atoms/Logo/Logo';
import Typography from '../../atoms/Typography/Typography';

interface LoginTemplateProps {
  onSubmit: () => void;
}

const LoginTemplate: React.FC<LoginTemplateProps> = () => (
  <main className="login">
    <div className="login__inner">
      <Logo className="login__logo" />
      <Typography variant="1">
        <span>Wellcome to </span>
        <span className="login__titleBlue">Chatty</span>
        <span className="login__titleLightBlue">!</span>
      </Typography>
      <Typography className="login__subtitle" variant="2">
        Please, autorize yourself
      </Typography>
      <LoginForm />
    </div>
    <span className="login__span" />
  </main>
);

export default LoginTemplate;

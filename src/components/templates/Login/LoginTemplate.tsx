import React from 'react';
import LoginForm from '../../organisms/LoginForm/LoginForm';
import './LoginTemplate.scss';
import authBackgroung from '../../../assets/images/authBackground.svg';
import Logo from '../../atoms/Logo/Logo';
import Text from '../../atoms/Typography/Typography';

interface LoginTemplateProps {
  onSubmit: (data: { userName: string; password: string }) => void;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ onSubmit }) => (
  <main className="login">
    <div className="login__inner">
      <Logo className="login__logo" />
      <Text variant="1">
        <span>Wellcome to </span>
        <span className="login__titleBlue">Chatty</span>
        <span className="login__titleLightBlue">!</span>
      </Text>
      <Text className="login__subtitle" variant="2">
        Please, autorize yourself
      </Text>
      <LoginForm onSubmit={onSubmit} />
    </div>
    <img className="login__img" src={authBackgroung} alt="authImg" />
  </main>
);

export default LoginTemplate;

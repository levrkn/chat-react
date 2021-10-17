import React from 'react';
import Button from '../../atoms/Button/Button';
import Field from '../../molecules/Field/Field';
import './LoginForm.scss';

interface LoginForm {
  onSubmit: () => 1;
}

const LoginForm: React.FC<LoginForm> = (props: LoginForm) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className="LoginForm">
      <Field title="user name" />
      <Field title="password" />
      <Button>Log In</Button>
    </form>
  );
};

export default LoginForm;

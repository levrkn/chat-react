import React from 'react';
import Button from '../../atoms/Button/Button';
import Field from '../../molecules/Field/Field';
import './LoginForm.scss';

interface LoginForm {
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}

const LoginForm: React.FC<LoginForm> = (props: LoginForm) => {
  LoginForm.defaultProps = {
    className: '',
  };
  const { onSubmit, className } = props;
  return (
    <form className={`LoginForm ${className}`} onSubmit={onSubmit}>
      <Field className="LoginForm__field" title="user name" />
      <Field className="LoginForm__field" title="password" />
      <Button className="LoginForm__button">Log In</Button>
    </form>
  );
};

export default LoginForm;

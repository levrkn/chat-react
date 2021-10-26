import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import AuthButton from '../../atoms/AuthButton/AuthButton';
import Field from '../../molecules/Field/Field';
import './LoginForm.scss';

interface LoginForm {
  className?: string;
  onSubmit: () => void;
}

const schema = yup.object().shape({
  userName: yup.string().min(8).max(32).required(),
  password: yup.string().min(8).max(32).required(),
});

const LoginForm: FC<LoginForm> = ({ className = '', onSubmit }) => {
  const classProps = classNames('loginForm', className);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <form className={classProps} onSubmit={handleSubmit(onSubmit)}>
      <Field
        className="loginForm__field"
        title="user name"
        error={errors.userName?.message}
        {...register('userName')}
      />
      <Field
        className="loginForm__field"
        title="password"
        error={errors.password?.message}
        type="password"
        {...register('password')}
      />
      <AuthButton error={errors} className="loginForm__button">
        Log In
      </AuthButton>
    </form>
  );
};

export default LoginForm;

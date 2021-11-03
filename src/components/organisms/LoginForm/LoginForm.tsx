import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import AuthButton from '../../atoms/AuthButton/AuthButton';
import Field from '../../molecules/Field/Field';
import './LoginForm.scss';
import { loginFx } from '../../../store';

interface LoginForm {
  className?: string;
  onSubmit: () => void;
}

const schema = yup.object().shape({
  login: yup.string().min(5).max(50).required(),
  password: yup.string().min(8).max(32).required(),
});

const LoginForm: FC<LoginForm> = ({ className = '', onSubmit }) => {
  const classProps = classNames('loginForm', className);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      login: '',
      password: '',
      captcha: '',
    },
  });
  const onSubmitTest = (data: {
    login: string;
    password: string;
    captcha: string;
  }) => {
    loginFx(data);
  };

  return (
    <form className={classProps} onSubmit={handleSubmit(onSubmitTest)}>
      <Controller
        control={control}
        name="login"
        render={({
          field: { onChange, onBlur },
          fieldState: { error, isDirty },
        }) => (
          <Field
            className="loginForm__field"
            title="login"
            error={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            isDirty={isDirty}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, onBlur },
          fieldState: { error, isDirty },
        }) => (
          <Field
            className="loginForm__field"
            title="password"
            error={error?.message}
            type="password"
            onChange={onChange}
            onBlur={onBlur}
            isDirty={isDirty}
          />
        )}
      />
      <img
        src="http://109.194.37.212:93/api/auth/captcha"
        alt=""
        style={{ width: '100px' }}
      />
      <Controller
        control={control}
        name="captcha"
        render={({ field: { onChange, onBlur } }) => (
          <input onChange={onChange} onBlur={onBlur} placeholder="captcha" />
        )}
      />
      <AuthButton error={errors} className="loginForm__button">
        Log In
      </AuthButton>
    </form>
  );
};

export default LoginForm;

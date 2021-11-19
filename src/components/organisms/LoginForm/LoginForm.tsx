import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import AuthButton from '../../atoms/AuthButton/AuthButton';
import Field from '../../molecules/Field/Field';
import './LoginForm.scss';
import { loginFx } from '../../../store/auth';
import AuthCaptcha from '../../molecules/AuthCaptcha/AuthCaptcha';

interface LoginFormProps {
  className?: string;
}

const schema = yup.object().shape({
  login: yup.string().min(5).max(50).required(),
  password: yup.string().min(8).max(32).required(),
  captcha: yup.string().length(5).required(),
});

const LoginForm: FC<LoginFormProps> = ({ className = '' }) => {
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
  const history = useHistory();
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
            label="User name"
            placeholder="Input user name"
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
            label="Password"
            placeholder="Input password"
            error={error?.message}
            type="password"
            onChange={onChange}
            onBlur={onBlur}
            isDirty={isDirty}
          />
        )}
      />
      <div className="loginForm__captcha">
        <Controller
          control={control}
          name="captcha"
          render={({
            field: { onChange, onBlur },
            fieldState: { error, isDirty },
          }) => (
            <Field
              className="loginForm__field"
              label="Security code"
              placeholder="Security code"
              error={error?.message}
              onChange={onChange}
              onBlur={onBlur}
              isDirty={isDirty}
            />
          )}
        />
        <AuthCaptcha />
      </div>
      <div className="loginForm__buttons">
        <AuthButton error={errors} className="loginForm__button">
          Log In
        </AuthButton>
        <AuthButton
          className="loginForm__button"
          variant="white"
          onClick={() => history.push('/registration')}
        >
          Registration
        </AuthButton>
      </div>
    </form>
  );
};

export default LoginForm;

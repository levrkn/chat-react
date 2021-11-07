import React, { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { useStore } from 'effector-react';
import AuthButton from '../../atoms/AuthButton/AuthButton';
import Field from '../../molecules/Field/Field';
import './RegistrationForm.scss';
import { $genders, fetchGendersFx, registrationFx } from '../../../store/auth';
import AuthCaptcha from '../../molecules/AuthCaptcha/AuthCaptcha';
import AuthSelect from '../../molecules/AuthSelect/AuthSelect';

interface RegistrationFormProps {
  className?: string;
}

const schema = yup.object().shape({
  login: yup.string().min(5).max(50),
  password: yup.string().min(8).max(32),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  name: yup.string().max(50).required('This is a required field'),
  genderId: yup.string().required('This is a required field'),
  captcha: yup.string().length(5),
});

const RegistrationForm: FC<RegistrationFormProps> = ({ className = '' }) => {
  const classProps = classNames('registrationForm', className);
  const genders = useStore($genders);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      login: '',
      password: '',
      passwordConfirm: '',
      name: '',
      genderId: '',
      captcha: '',
    },
  });
  const history = useHistory();
  useEffect(() => {
    fetchGendersFx();
  }, []);

  const onSubmitTest = (data: {
    login: string;
    password: string;
    passwordConfirm: string;
    name: string;
    genderId: string;
    captcha: string;
  }) => {
    registrationFx(data);
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
            className="registrationForm__field"
            label="Create user name"
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
            className="registrationForm__field"
            label="Create password"
            placeholder="Create password"
            type="password"
            error={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            isDirty={isDirty}
          />
        )}
      />
      <Controller
        control={control}
        name="passwordConfirm"
        render={({
          field: { onChange, onBlur },
          fieldState: { error, isDirty },
        }) => (
          <Field
            className="registrationForm__field"
            label="Password confirmation"
            placeholder="Password confirmation"
            type="password"
            error={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            isDirty={isDirty}
          />
        )}
      />
      <Controller
        control={control}
        name="name"
        render={({
          field: { onChange, onBlur },
          fieldState: { error, isDirty },
        }) => (
          <Field
            className="registrationForm__field"
            label="Nickname"
            placeholder="Nickname"
            error={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            isDirty={isDirty}
          />
        )}
      />
      <Controller
        control={control}
        name="genderId"
        render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
          <AuthSelect
            className="registrationForm__field"
            label="Your gender"
            error={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            options={genders.genders}
          />
        )}
      />
      <div className="registrationForm__captcha">
        <Controller
          control={control}
          name="captcha"
          render={({
            field: { onChange, onBlur },
            fieldState: { error, isDirty },
          }) => (
            <Field
              className="registrationForm__field"
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
      <div className="registrationForm__buttons">
        <AuthButton error={errors} className="registrationForm__button">
          Registration
        </AuthButton>
        <AuthButton
          className="registrationForm__button"
          variant="white"
          onClick={() => history.push('/login')}
        >
          Log In
        </AuthButton>
      </div>
    </form>
  );
};

export default RegistrationForm;

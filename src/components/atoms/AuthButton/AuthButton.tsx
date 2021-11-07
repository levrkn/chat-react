import classNames from 'classnames';
import React, { FC } from 'react';
import { FieldError } from 'react-hook-form';
import './AuthButton.scss';

interface AuthButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'white';
  onClick?: () => void;
  error?: {
    login?: FieldError | undefined;
    password?: FieldError | undefined;
    captcha?: FieldError | undefined;
  };
}

const AuthButton: FC<AuthButtonProps> = ({
  className = '',
  children,
  variant,
  error,
  ...rest
}) => {
  const classProps = classNames('button', className, {
    white: variant === 'white',
  });

  return (
    <button
      className={classProps}
      disabled={!!error?.login || !!error?.password || !!error?.captcha}
      type={variant === 'white' ? 'button' : 'submit'}
      {...rest}
    >
      {children}
    </button>
  );
};

export default AuthButton;

import classNames from 'classnames';
import React, { FC } from 'react';
import { FieldError } from 'react-hook-form';
import './AuthButton.scss';

interface AuthButtonProps {
  className?: string;
  children: React.ReactNode;
  error: {
    login?: FieldError | undefined;
    password?: FieldError | undefined;
    captcha?: FieldError | undefined;
  };
}

const AuthButton: FC<AuthButtonProps> = ({
  className = '',
  children,
  error,
}) => {
  const classProps = classNames('button', className);

  return (
    <button
      className={classProps}
      disabled={!!Object.keys(error)[0]}
      type="submit"
    >
      {children}
    </button>
  );
};

export default AuthButton;

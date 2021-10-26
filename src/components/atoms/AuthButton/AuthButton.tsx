import classNames from 'classnames';
import React, { FC } from 'react';
import './AuthButton.scss';

interface AuthButtonProps {
  className?: string;
  children: React.ReactNode;
  error: { [x: string]: { userName: string; password: string } };
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

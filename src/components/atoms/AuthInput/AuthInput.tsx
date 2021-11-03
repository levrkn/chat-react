import classNames from 'classnames';
import React, { FC } from 'react';
import './AuthInput.scss';

interface AuthInputProps {
  className?: string;
  id: string;
  placeholder: string;
  error: string | undefined;
  isDirty: boolean;
}

const AuthInput: FC<AuthInputProps> = ({
  className = '',
  error,
  isDirty,
  ...rest
}) => {
  const classProps = classNames('input', className, {
    isDirty,
    error: !!error,
  });

  return (
    <>
      <input className={classProps} autoComplete="off" {...rest} />
      {error && <p className="input__errorText">{error}</p>}
    </>
  );
};

export default AuthInput;

import classNames from 'classnames';
import React, { forwardRef } from 'react';
import './AuthInput.scss';

interface AuthInputProps {
  className?: string;
  id: string;
  placeholder: string;
  error: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className = '', error, ...rest }, ref) => {
    const classProps = classNames('input', className, { error: !!error });

    return (
      <>
        <input className={classProps} ref={ref} required {...rest} />
        {error && <p className="input__errorText">{error}</p>}
      </>
    );
  },
);

export default AuthInput;

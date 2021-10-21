import React from 'react';
import './AuthInput.scss';

interface AuthInputProps {
  className?: string;
  id: string;
  placeholder: string;
  error: string;
}

const AuthInput = React.forwardRef<HTMLInputElement, AuthInputProps>(
  ({ className, error, ...rest }, ref) => {
    const classProps = error
      ? `input error ${className}`
      : `input ${className}`;
    return (
      <>
        <input
          className={classProps}
          ref={ref}
          required
          {...rest}
        />
        {error && <p className="input__errorText">{error}</p>}
      </>
    );
  },
);

AuthInput.defaultProps = {
  className: '',
};

export default AuthInput;

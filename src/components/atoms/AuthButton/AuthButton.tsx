import React from 'react';
import './AuthButton.scss';

interface AuthButtonProps {
  children: React.ReactNode;
  className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ className, children }) => {
  const classProps = `button ${className}`;
  return (
    <button className={classProps} disabled={false} type="submit">
      {children}
    </button>
  );
};

AuthButton.defaultProps = {
  className: '',
};

export default AuthButton;

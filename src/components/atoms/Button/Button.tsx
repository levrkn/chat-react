import React from 'react';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  Button.defaultProps = {
    className: '',
  };
  const { children, className } = props;

  return (
    <button disabled={false} className={`button ${className}`} type="submit">
      {children}
    </button>
  );
};
export default Button;

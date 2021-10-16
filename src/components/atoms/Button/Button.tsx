import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => (
  <button disabled={false} className="button" type="button" {...rest}>
    {children}
  </button>
);
export default Button;

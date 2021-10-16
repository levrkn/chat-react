import React, { InputHTMLAttributes } from 'react';
import './Input.scss';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => <input className="input" type="text" {...rest} />;
export default Input;

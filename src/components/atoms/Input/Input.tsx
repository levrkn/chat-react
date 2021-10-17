import React from 'react';
import './Input.scss';

interface InputProps {
  id: string;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  Input.defaultProps = {
    className: '',
  };
  const { id, placeholder, className } = props;

  return (
    <input
      className={`input ${className}`}
      type="text"
      id={id}
      placeholder={placeholder}
      required
    />
  );
};
export default Input;

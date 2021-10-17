import React from 'react';
import './Label.scss';

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}

const Label: React.FC<LabelProps> = (props: LabelProps) => {
  Label.defaultProps = {
    className: '',
  };
  const { children, htmlFor, className } = props;
  return (
    <label className={`label ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;

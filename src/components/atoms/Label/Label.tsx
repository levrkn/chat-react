import React from 'react';
import './Label.scss';

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ className, children, htmlFor }) => {
  const classProps = `label ${className}`;
  return (
    <label className={classProps} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.defaultProps = {
  className: '',
};

export default Label;

import React, { LabelHTMLAttributes } from 'react';
import './Label.scss';

const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  ...rest
}) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className="input" {...rest}>
    {children}
  </label>
);

export default Label;

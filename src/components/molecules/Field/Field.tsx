import React from 'react';
import './Field.scss';
import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';

interface FieldProps {
  className?: string;
  title: string;
}

const Field: React.FC<FieldProps> = (props: FieldProps) => {
  Field.defaultProps = {
    className: '',
  };
  const { className, title } = props;
  return (
    <div className={`field ${className}`}>
      <Label className="field__label" htmlFor={title}>{title[0].toUpperCase() + title.slice(1)}</Label>
      <Input id={title} placeholder={`Input ${title}`} />
    </div>
  );
};

export default Field;

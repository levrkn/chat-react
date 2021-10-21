import React from 'react';
import './Field.scss';
import Label from '../../atoms/Label/Label';
import AuthInput from '../../atoms/AuthInput/AuthInput';

interface FieldProps {
  className?: string;
  type?: string
  title: string;
  error: string;
}

const Field = React.forwardRef<HTMLInputElement, FieldProps>(
  ({ className, title, error, ...rest }, ref) => {
    const classProps = `field ${className}`;
    return (
      <div className={classProps}>
        <Label className="field__label" htmlFor={title}>
          {title[0].toUpperCase() + title.slice(1)}
        </Label>
        <AuthInput
          id={title}
          placeholder={`Input ${title}`}
          ref={ref}
          error={error}
          {...rest}
        />
      </div>
    );
  },
);

Field.defaultProps = {
  className: '',
};

export default Field;

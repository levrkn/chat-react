import React, { FC } from 'react';
import './Field.scss';
import { Noop } from 'react-hook-form';
import classNames from 'classnames';
import Label from '../../atoms/Label/Label';
import AuthInput from '../../atoms/AuthInput/AuthInput';

interface FieldProps {
  className?: string;
  type?: string;
  label: string;
  placeholder: string
  error: string | undefined;
  onChange: (...event: []) => void;
  onBlur: Noop;
  isDirty: boolean
}

const Field: FC<FieldProps> = ({ className = '', label, error, ...rest }) => {
  const classProps = classNames('field', className, { error: !!error });
  return (
    <div className={classProps}>
      <Label className="field__label" htmlFor={label}>
        {label}
      </Label>
      <AuthInput
        id={label}
        error={error}
        {...rest}
      />
    </div>
  );
};

export default Field;

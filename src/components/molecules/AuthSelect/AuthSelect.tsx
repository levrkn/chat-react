import React, { FC } from 'react';
import './AuthSelect.scss';
import { Noop } from 'react-hook-form';
import classNames from 'classnames';
import Label from '../../atoms/Label/Label';
import Select from '../../atoms/Select/Select';

interface AuthSelectProps {
  className?: string;
  label: string;
  error: string | undefined;
  onChange: (...event: []) => void;
  onBlur: Noop;
  options: { id: string; gender: string }[];
}

const AuthSelect: FC<AuthSelectProps> = ({
  className = '',
  label,
  error,
  options,
  ...rest
}) => {
  const classProps = classNames('authSelect', className, { error: !!error });

  return (
    <div className={classProps}>
      <Label className="authSelect__label" htmlFor={label}>
        {label}
      </Label>
      <Select options={options} id={label} error={error} {...rest} />
    </div>
  );
};

export default AuthSelect;

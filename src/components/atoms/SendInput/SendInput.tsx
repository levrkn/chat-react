import classNames from 'classnames';
import React, { forwardRef } from 'react';
import './SendInput.scss';

interface SendInputProps {
  className?: string;
}

const SendInput = forwardRef<HTMLInputElement, SendInputProps>(
  ({ className = '', ...rest }, ref) => {
    const classProps = classNames('sendInput', className);
    return (
      <>
        <input
          className={classProps}
          placeholder="Sending messages works too..."
          autoComplete="off"
          ref={ref}
          {...rest}
        />
      </>
    );
  },
);

export default SendInput;

import classNames from 'classnames';
import React, { FC } from 'react';
import './SendInput.scss';

interface SendInputProps {
  className?: string;
  onChange: (text: string) => void;
  value: string | undefined;
}

const SendInput: FC<SendInputProps> = ({ className = '', onChange, value }) => {
  const classProps = classNames('sendInput', className);

  return (
    <>
      <input
        className={classProps}
        placeholder="Sending messages works too..."
        autoComplete="off"
        defaultValue=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default SendInput;

import React from 'react';
import './SendInput.scss';

interface SendInputProps {
  className?: string;
}

const SendInput: React.FC<SendInputProps> = ({ className }) => {
  const classProps = `sendInput ${className}`;
  return (
    <>
      <input className={classProps} placeholder="Write something..." />
    </>
  );
};

SendInput.defaultProps = {
  className: '',
};

export default SendInput;

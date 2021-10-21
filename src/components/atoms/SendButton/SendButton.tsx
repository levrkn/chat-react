import React from 'react';
import './SendButton.scss';
import sendIcon from '../../../assets/images/sendIcon.svg';

interface SendButtonProps {
  className?: string;
}

const SendButton: React.FC<SendButtonProps> = ({ className }) => {
  const classProps = `sendButton ${className}`;
  return (
    <>
      <button className={classProps} type="submit">
        <img src={sendIcon} alt="send" />
      </button>
    </>
  );
};

SendButton.defaultProps = {
  className: '',
};

export default SendButton;

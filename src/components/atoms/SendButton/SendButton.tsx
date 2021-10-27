import React, { FC } from 'react';
import './SendButton.scss';
import classNames from 'classnames';
import sendIcon from '../../../assets/images/sendIcon.svg';

interface SendButtonProps {
  className?: string;
}

const SendButton: FC<SendButtonProps> = ({ className = '' }) => {
  const classProps = classNames('sendButton', className);

  return (
    <button className={classProps} type="submit">
      <img src={sendIcon} alt="send" />
    </button>
  );
};

export default SendButton;

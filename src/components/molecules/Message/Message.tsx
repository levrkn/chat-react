import classNames from 'classnames';
import React, { FC } from 'react';
import Typography from '../../atoms/Typography/Typography';
import './Message.scss';

interface MessageProps {
  className?: string;
  type: 'left' | 'right';
  messageText: string;
}

const Message: FC<MessageProps> = ({ className = '', type, messageText }) => {
  const classProps = classNames('message', className, {
    message__right: type === 'right',
  });
  return (
    <div className={classProps}>
      <Typography className="message__text" variant="5">
        {messageText}
      </Typography>
    </div>
  );
};

export default Message;

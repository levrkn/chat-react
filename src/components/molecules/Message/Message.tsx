import React from 'react';
import Typography from '../../atoms/Typography/Typography';
import './Message.scss';

interface MessageProps {
  className?: string;
  type: 'left' | 'right';
  messageText: string;
}

const Message: React.FC<MessageProps> = ({ className, type, messageText }) => {
  const classProps = `message ${className}`;
  switch (type) {
    case 'left':
      return (
        <div className={classProps}>
          <Typography variant="5">{messageText}</Typography>
        </div>
      );
    default:
      return (
        <div className={`message__right ${classProps}`}>
          <Typography variant="5">{messageText}</Typography>
        </div>
      );
  }
};

Message.defaultProps = {
  className: '',
};

export default Message;

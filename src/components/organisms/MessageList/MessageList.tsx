import classNames from 'classnames';
import React, { FC, useEffect } from 'react';
import Message from '../../molecules/Message/Message';
import './MessageList.scss';

interface MessageListProps {
  className?: string;
  messages: { id: number; type: 'right' | 'left'; messageText: string }[];
}

const MessageList: FC<MessageListProps> = ({ className = '', messages }) => {
  const classProps = classNames('messageList', className);
  useEffect(() => {
    const messagess = document.getElementById('1');
    const scroll = () => {
      if (messagess !== null) {
        messagess.scrollTop = messagess.scrollHeight;
      }
    };
    scroll();
  });

  return (
    <div className={classProps} id="1">
      <div className="messageList__inner">
        {messages.map((el) => (
          <React.Fragment key={el.id}>
            <Message type={el.type} messageText={el.messageText} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MessageList;

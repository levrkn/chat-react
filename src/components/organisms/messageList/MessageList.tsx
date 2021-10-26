import classNames from 'classnames';
import React, { FC } from 'react';
import Loader from '../../atoms/Loader/Loader';
import Message from '../../molecules/Message/Message';
import './MessageList.scss';

interface MessageListProps {
  className?: string;
  messages: { id: number; type: 'right' | 'left'; messageText: string }[];
}

const MessageList: FC<MessageListProps> = ({ className = '', messages }) => {
  const classProps = classNames('messaging', className);
  React.useEffect(() => {
    const messagess = document.getElementById('1');
    const scroll = () => {
      if (messagess !== null) {
        messagess.scrollTop = messagess.scrollHeight;
      }
    };
    scroll();
  });

  return (
    <>
      <div className={classProps}>
        <div className="messaging__inner" id="1">
          <div className="messaging__inner__wrap">
            {messages ? (
              messages.map((el) => (
                <React.Fragment key={el.id}>
                  <Message type={el.type} messageText={el.messageText} />
                </React.Fragment>
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageList;

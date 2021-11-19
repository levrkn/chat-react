import classNames from 'classnames';
import React, { FC } from 'react';
import { MessageType, userType } from '../../../types';
import Loader from '../../atoms/Loader/Loader';
import Activity from '../../molecules/Activity/Activity';
import NoCardSelected from '../../molecules/NoCardSelected/NoCardSelected';
import CardList from '../../organisms/CardList/CardList';
import Header from '../../organisms/Header/Header';
import MessageList from '../../organisms/MessageList/MessageList';
import SendForm from '../../organisms/SendForm/SendForm';
import './ChatTemplate.scss';

interface ChatTemplateProps {
  currentUser: userType;
  users: userType[];
  messages: MessageType[];
  isLoading: boolean;
}

const ChatTemplate: FC<ChatTemplateProps> = ({
  currentUser,
  users,
  messages,
  isLoading,
}) => {
  const mobileClass = classNames('chat__inner', { show: currentUser });
  const content =
    users.filter((user) => !user.you)[0] && currentUser ? (
      <>
        <Activity
          title={currentUser.name}
          subtitle="online"
          gender={currentUser.gender}
        />
        <MessageList
          messages={messages.filter(
            (message) =>
              (message.from === currentUser?.name &&
                message.to === users.filter((user) => user.you)[0]?.name) ||
              (message.from === users.filter((user) => user.you)[0]?.name &&
                message.to === currentUser?.name),
          )}
        />
        <SendForm currentUser={currentUser} />
      </>
    ) : (
      users.filter((user) => !user.you)[0] && <NoCardSelected />
    );

  return (
    <>
      <Header className={currentUser && 'disable'} />
      <main className="chat">
        <CardList
          className={currentUser && 'disable'}
          users={users}
          isLoading={isLoading}
          messages={messages}
        />
        <div className={mobileClass}>{isLoading ? <Loader /> : content}</div>
      </main>
    </>
  );
};

export default ChatTemplate;

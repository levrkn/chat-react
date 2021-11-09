import classNames from 'classnames';
import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { $users } from '../../../store/chat';
import { ChatType } from '../../../types';
import Loader from '../../atoms/Loader/Loader';
import Activity from '../../molecules/Activity/Activity';
import NoCardSelected from '../../molecules/NoCardSelected/NoCardSelected';
import CardList from '../../organisms/CardList/CardList';
import Header from '../../organisms/Header/Header';
import MessageList from '../../organisms/MessageList/MessageList';
import SendForm from '../../organisms/SendForm/SendForm';
import './ChatTemplate.scss';

interface ChatTemplateProps {
  currentChat: ChatType;
  chats: ChatType[];
  isLoading: boolean;
}

const ChatTemplate: FC<ChatTemplateProps> = ({
  currentChat,
  chats,
  isLoading,
}) => {
  const mobileClass = classNames('chat__inner', { show: currentChat });
  const users = useStore($users);
  const content = users[0] && currentChat ? (
    <>
      <Activity
        title={currentChat.name}
        subtitle={currentChat.activity}
        gender={currentChat.gender}
      />
      <MessageList messages={currentChat?.messages} />
      <SendForm />
    </>
  ) : (
    chats[0] && <NoCardSelected />
  );

  return (
    <>
      <Header className={currentChat && 'disable'} />
      <main className="chat">
        <CardList
          className={currentChat && 'disable'}
          chats={chats}
          isLoading={isLoading}
        />
        <div className={mobileClass}>{isLoading ? <Loader /> : content}</div>
      </main>
    </>
  );
};

export default ChatTemplate;

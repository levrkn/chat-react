import React, { FC } from 'react';
import { ChatType } from '../../../types';
import Loader from '../../atoms/Loader/Loader';
import Activity from '../../molecules/Activity/Activity';
import NoCardSelected from '../../molecules/NoCardSelected/NoCardSelected';
import CardList from '../../organisms/CardList/CardList';
import Header from '../../organisms/Header/Header';
import Messaging from '../../organisms/messageList/MessageList';
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
  const content = currentChat ? (
    <>
      <Activity title={currentChat.name} subtitle={currentChat.activity} />
      <Messaging messages={currentChat?.messages} />
      <SendForm />
    </>
  ) : (
    chats[0] && <NoCardSelected />
  );

  return (
    <>
      <Header />
      <main className="chat">
        <CardList chats={chats} isLoading={isLoading} />
        <div className="chat__inner">{isLoading ? <Loader /> : content}</div>
      </main>
    </>
  );
};

export default ChatTemplate;

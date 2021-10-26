import React from 'react';
import { ChatType } from '../../../types';
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
}

const ChatTemplate: React.FC<ChatTemplateProps> = ({ currentChat, chats }) => (
  <>
    <Header />
    <main className="chat">
      <CardList chats={chats} />
      <div className="chat__inner">
        {currentChat ? (
          <>
            <Activity
              title={currentChat.name}
              subtitle={currentChat.activity}
            />
            <Messaging messages={currentChat?.messages} />
            <SendForm />
          </>
        ) : (
          chats[0] && <NoCardSelected />
        )}
      </div>
    </main>
  </>
);

export default ChatTemplate;

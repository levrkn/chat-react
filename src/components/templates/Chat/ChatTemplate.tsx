import React from 'react';
import Activity from '../../molecules/Activity/Activity';
import CardList from '../../organisms/CardList/CardList';
import Header from '../../organisms/Header/Header';
import Messaging from '../../organisms/messageList/MessageList';
import SendForm from '../../organisms/SendForm/SendForm';
import './ChatTemplate.scss';

interface ChatTemplateProps {
  messages: { id: number; type: 'right' | 'left'; messageText: string }[];
}

const ChatTemplate: React.FC<ChatTemplateProps> = ({ messages }) => (
  <>
    <Header />
    <main className="chat">
      <CardList />
      <div style={{ flex: 3 }}>
        <Activity />
        <Messaging messages={messages} />
        <SendForm />
      </div>
    </main>
  </>
);

export default ChatTemplate;

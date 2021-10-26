import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { $chats, $currentСhatId } from '../../store';
import ChatTemplate from '../templates/Chat/ChatTemplate';

const Chat: FC = () => {
  const currentChatId = useStore($currentСhatId);
  const chats = useStore($chats);
  const currentChat = chats.filter((el) => el.id === currentChatId)[0];

  return <ChatTemplate chats={chats} currentChat={currentChat} />;
};

export default Chat;

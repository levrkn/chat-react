import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { $chats, $currentСhatId, $isLoading, fetchChatsFx } from '../../store';
import ChatTemplate from '../templates/Chat/ChatTemplate';

const Chat: FC = () => {
  useEffect(() => {
    fetchChatsFx();
  }, []);

  const currentChatId = useStore($currentСhatId);
  const isLoading = useStore($isLoading);
  const chats = useStore($chats);
  const currentChat = chats.filter((el) => el.id === currentChatId)[0];

  return (
    <ChatTemplate
      chats={chats}
      currentChat={currentChat}
      isLoading={isLoading}
    />
  );
};

export default Chat;

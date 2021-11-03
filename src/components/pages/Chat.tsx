import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $chats, $isLoading, fetchChatsFx } from '../../store';
import ChatTemplate from '../templates/Chat/ChatTemplate';

const Chat: FC = () => {
  useEffect(() => {
    fetchChatsFx();
  }, []);

  const params: { id: string } = useParams();
  const isLoading = useStore($isLoading);
  const chats = useStore($chats);
  const currentChat = chats.filter((el) => el.id === Number(params.id))[0];

  return (
    <ChatTemplate
      chats={chats}
      currentChat={currentChat}
      isLoading={isLoading}
    />
  );
};

export default Chat;

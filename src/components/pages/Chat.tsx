import { useStore } from 'effector-react';
import React, { FC, useEffect, useState } from 'react';
import { $chats, $currentСhatId, fetchChatsFx } from '../../store';
import ChatTemplate from '../templates/Chat/ChatTemplate';

const Chat: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchChatsFx();
    fetchChatsFx.fail.watch(({ error, params }) => {
      console.error(params);
      console.error(error);
      setIsLoading(true);
    });
    fetchChatsFx.done.watch(({ result, params }) => {
      console.log(params);
      console.log(result);
      setIsLoading(false);
    });
  }, []);

  const currentChatId = useStore($currentСhatId);
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

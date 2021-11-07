import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { $chats, $chatsIsLoading, fetchChatsFx } from '../../store/chat';
import ChatTemplate from '../templates/Chat/ChatTemplate';

const Chat: FC = () => {
  useEffect(() => {
    fetchChatsFx();
    const webSocket = new WebSocket(
      `ws://109.194.37.212:2346/?type=test&ws_id=${
        localStorage.getItem('wsConnectKey') || ''
      }`,
    );
    webSocket.onopen = () => {
      webSocket.send(JSON.stringify({ type: 'users_list' }));
    };
    webSocket.onmessage = (event) => console.log(event.data);
  }, []);

  const params: { id: string } = useParams();
  const chatsIsLoading = useStore($chatsIsLoading);
  const chats = useStore($chats);
  const currentChat = chats.filter((el) => el.id === Number(params.id))[0];

  return (
    <ChatTemplate
      chats={chats}
      currentChat={currentChat}
      isLoading={chatsIsLoading}
    />
  );
};

export default Chat;

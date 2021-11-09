import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  $chats,
  $chatsIsLoading,
  $users,
  fetchChatsFx,
  refreshUsersList,
} from '../../store/chat';
import { userType } from '../../types';
import ChatTemplate from '../templates/Chat/ChatTemplate';

function isJson(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const Chat: FC = () => {
  useEffect(() => {
    fetchChatsFx();
    const socket = new WebSocket(
      `ws://109.194.37.212:2346/?type=test123154&ws_id=${
        localStorage.getItem('wsConnectKey') || ''
      }`,
    );
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'users_list' }));
      socket.send('This is a capybara homework check');
    };
    socket.onmessage = (event: MessageEvent<string>) => {
      if (isJson(event.data) && JSON.parse(event.data).type === 'users_list') {
        refreshUsersList(
          JSON.parse(event.data).data.map((el: userType, index: number) => ({
            ...el,
            id: index + 1,
          })),
        );
      }
      console.log(event);
    };
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

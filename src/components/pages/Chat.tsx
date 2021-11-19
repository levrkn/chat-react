import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  $messages,
  $socket,
  $users,
  $usersIsLoading,
  addMessage,
  itIsMe,
  refreshUsersList,
} from '../../store/chat';
import { userType } from '../../types';
import { isJson } from '../../utils/functions';
import ChatTemplate from '../templates/Chat/ChatTemplate';

const Chat: FC = () => {
  const socket = useStore($socket);
  useEffect(() => {
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'users_list' }));
      socket.send(JSON.stringify({ type: 'user_data' }));
    };
    socket.onmessage = (event: MessageEvent<string>) => {
      if (isJson(event.data)) {
        if (JSON.parse(event.data).type === 'users_list') {
          refreshUsersList(
            JSON.parse(event.data).data.map((el: userType, index: number) => ({
              ...el,
              id: index + 1,
            })),
          );
        } else if (JSON.parse(event.data).type === 'user_data') {
          itIsMe(JSON.parse(event.data).data.name);
        }
      } else {
        addMessage(JSON.parse(event.data.replace(/^"(.*)"$/, '$1')));
      }
    };
  }, []);
  const params: { id: string } = useParams();
  const usersIsLoading = useStore($usersIsLoading);
  const users = useStore($users);
  const currentUser = users.filter((el) => el.id === Number(params.id))[0];
  const messages = useStore($messages);

  return (
    <ChatTemplate
      messages={messages}
      users={users}
      currentUser={currentUser}
      isLoading={usersIsLoading}
    />
  );
};

export default Chat;

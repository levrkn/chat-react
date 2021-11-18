import { createEffect, createEvent, createStore } from 'effector';
import { MessageType, ChatType, userType } from '../types/index';
import mockMessaging from '../fakeData';

import { $isAuth } from './auth';
import { errorAlert, successAlert } from '../utils/functions';

export const $chats = createStore(mockMessaging);
export const addMessage =
  createEvent<{ file?: MessageType['file']; text?: string; id: number }>();
const addMessageStore = (
  state: ChatType[],
  data: { file?: MessageType['file']; text?: string; id: number },
) => {
  state[data.id - 1].messages.push({
    ...data,
    author: 'user',
    id: Date.now(),
  });
  return [...state];
};
$chats.on(addMessage, addMessageStore);

export const refreshUsersList = createEvent<userType[]>();
export const $users = createStore<userType[]>([]).on(
  refreshUsersList,
  (state, payload) => payload,
);

export const $chatsIsLoading = createStore(true).on(
  refreshUsersList,
  () => false,
);

export const sendFileFx = createEffect(
  async (params: { file: File; func: (href: string) => void }) => {
    const formdata = new FormData();
    formdata.append('0', params.file);
    const res = await fetch('http://109.194.37.212:93/api/upload', {
      method: 'POST',
      body: formdata,
    });
    if (!res.ok) {
      await res.text().then((text) => {
        throw Error(text);
      });
    }
    return res.text();
  },
);
sendFileFx.done.watch(({ params, result }) => {
  params.func(`http://109.194.37.212:93${result}`);
  successAlert('file is ready to send');
});
sendFileFx.fail.watch(({ error }) => {
  errorAlert(error.message);
});

export const updateSocket = createEvent();
export const $socket = createStore(
  $isAuth &&
    new WebSocket(
      `ws://109.194.37.212:2346/?type=test&ws_id=${
        localStorage.getItem('wsConnectKey') || ''
      }`,
    ),
).on(
  updateSocket,
  () =>
    new WebSocket(
      `ws://109.194.37.212:2346/?type=test&ws_id=${
        localStorage.getItem('wsConnectKey') || ''
      }`,
    ),
);

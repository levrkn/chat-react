import { createEffect, createEvent, createStore } from 'effector';
import { MessageType, userType } from '../types/index';
import { $isAuth } from './auth';
import { errorAlert, successAlert } from '../utils/functions';

export const $messages = createStore<MessageType[]>(
  JSON.parse(localStorage.getItem('messages') || '[]'),
);
export const addMessage = createEvent<{
  file?: MessageType['file'];
  text?: string;
  from: string;
  to: string;
}>();
const addMessageStore = (
  state: MessageType[],
  data: { file?: MessageType['file']; text?: string; from: string; to: string },
) => {
  state.push({
    ...data,
    id: Date.now(),
  });
  localStorage.setItem('messages', JSON.stringify(state));
  return [...state];
};
$messages.on(addMessage, addMessageStore);

export const refreshUsersList = createEvent<userType[]>();
export const itIsMe = createEvent<string>();
export const $users = createStore<userType[]>([]).on(
  refreshUsersList,
  (state, payload) => {
    const result = payload;
    result[result.length - 1].you = true;
    return payload;
  },
);

export const $usersIsLoading = createStore(true).on(
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

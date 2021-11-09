import { createEffect, createEvent, createStore } from 'effector';
import mockMessaging from '../fakeData';
import { ChatType, MessageType, userType } from '../types';

export const $chats = createStore(mockMessaging);
export const addMessage = createEvent<MessageType>();
const addMessageStore = (state: ChatType[], data: MessageType) => {
  if (data.type === 'text') {
    state[data.id - 1].messages.push({
      id: Date.now(),
      author: 'user',
      type: 'text',
      text: data.text,
    });
  } else {
    state[data.id - 1].messages.push({
      ...data,
      id: Date.now(),
    });
  }
  return [...state];
};
$chats.on(addMessage, addMessageStore);
export const fetchChatsFx = createEffect(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
});

export const refreshUsersList = createEvent<userType[]>();
export const $users = createStore<userType[]>([]).on(
  refreshUsersList,
  (state, payload) => payload,
);

export const $chatsIsLoading = createStore(true)
  .on(fetchChatsFx.done, () => false)
  .on(fetchChatsFx.fail, () => true);

export const sendFileFx = createEffect(
  async (params: { file: File; id: number }) => {
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
sendFileFx.done.watch(({ result, params }) => {
  addMessage({
    id: Number(params.id),
    author: 'user',
    type: 'file',
    name: params.file.name,
    size: String(params.file.size),
    href: `http://109.194.37.212:93${result}`,
  });
});
sendFileFx.fail.watch(({ error }) => {
  alert(error);
});

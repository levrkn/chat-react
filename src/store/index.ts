import { createEffect, createEvent, createStore } from 'effector';
import mockMessaging from '../fakeData';
import { ChatType } from '../types';

export const $currentСhatId = createStore<number>(0);
export const updateCurrentId = createEvent<number>();
const updateCurrentIdStore = (state: number, data: number) => data;
$currentСhatId.on(updateCurrentId, updateCurrentIdStore);

export const $chats = createStore(mockMessaging);
export const addMessage = createEvent<{ text: string; id: number }>();
const addMessageStore = (
  state: ChatType[],
  data: { text: string; id: number },
) => {
  state[data.id - 1].messages.push({
    id: Date.now(),
    type: 'right',
    messageText: data.text,
  });
  return [...state];
};
$chats.on(addMessage, addMessageStore);

export const fetchChatsFx = createEffect(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
});

export const $isLoading = createStore(true)
  .on(fetchChatsFx.done, () => false)
  .on(fetchChatsFx.fail, () => true);

export const loginFx = createEffect(
  async (data: { login: string; password: string; captcha: string }) => {
    const res = await fetch('http://109.194.37.212:93/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'no-cors',
      body: JSON.stringify(data),
    });
    return res;
  },
);
loginFx.done.watch(({ result, params }) => {
  console.log(params);
  console.log(result);
});
loginFx.fail.watch(({ error, params }) => {
  console.error(params);
  console.error(error);
});

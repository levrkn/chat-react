import { createEffect, createEvent, createStore } from 'effector';
import mockMessaging from '../fakeData';
import { ChatType } from '../types';

export const $chats = createStore(mockMessaging);
export const addMessage = createEvent<{ text: string; id: number }>();
const addMessageStore = (
  state: ChatType[],
  data: { text: string; id: number },
) => {
  state[data.id - 1].messages.push({
    id: Date.now(),
    author: 'user',
    type: 'text',
    text: data.text,
  });
  return [...state];
};
$chats.on(addMessage, addMessageStore);
export const fetchChatsFx = createEffect(async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  return res.json();
});

export const $chatsIsLoading = createStore(true)
  .on(fetchChatsFx.done, () => false)
  .on(fetchChatsFx.fail, () => true);

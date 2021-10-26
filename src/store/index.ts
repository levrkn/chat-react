import { createEvent, createStore } from 'effector';
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

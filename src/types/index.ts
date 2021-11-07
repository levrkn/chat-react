export type ChatType = {
  id: number;
  name: string;
  activity: string;
  gender: 'male' | 'female';
  messages: MessageType[];
};

export type MessageType = {
  id: number;
  author: 'user' | 'friend';
  type: 'file' | 'text';
  text?: string;
  name?: string;
  size?: string;
};

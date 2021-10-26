export type ChatType = {
  id: number;
  name: string;
  activity: string;
  avatar: string;
  messages: MessageType[];
};

export type MessageType = {
  id: number;
  type: 'right' | 'left';
  messageText: string;
};

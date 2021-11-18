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
  text?: string;
  file?: {
    name: string;
    size: number;
    href: string;
  }
};

export type userType = {id: number, name: string; gender: 'male' | 'female' };

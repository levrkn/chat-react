export type MessageType = {
  id: number;
  from: string;
  to: string;
  text?: string;
  file?: {
    name: string;
    size: number;
    href: string;
  }
};

export type userType = {id: number, name: string; gender: 'male' | 'female', you?: true };

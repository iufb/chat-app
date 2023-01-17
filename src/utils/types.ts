export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};
export type Conversation = {
  id: number;
  creator: User;
  recipient: User;
};
export type Message = {
  author: User;
  content: string;
  conversation: number;
  createdAt: string;
  id: number;
};

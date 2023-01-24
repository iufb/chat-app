export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};
export type Conversation = {
  id: number;
  creator: User;
  createdAt: string;
  recipient: User;
  messages: Message[];
};
export type CreateNewConversationParams = {
  recipientId: number;
  message: string;
};
export type createMessage = {
  content: string;
  conversationId: number;
};
export type Message = {
  author: User;
  content: string;
  createdAt: string;
  id: number;
};
export type FetchMessagesType = {
  id: number;
  messages: Message[];
};
export type MessageEvent = {
  id: number;
  createdAt: string;
  conversation: Conversation;
  author: User;
  content: string;
};

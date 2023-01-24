import axios, { AxiosRequestConfig } from "axios";
import { ILoginForm } from "../components/LoginForm/LoginForm.interface";
import { IRegisterForm } from "../components/RegisterForm/RegisterForm.interface";
import {
  Conversation,
  createMessage,
  CreateNewConversationParams,
  FetchMessagesType,
  User,
} from "./types";

const config: AxiosRequestConfig = { withCredentials: true };

const { VITE_SERVER_URL } = import.meta.env;
const axiosClient = axios.create({ baseURL: VITE_SERVER_URL });
export const postCreateUser = (data: IRegisterForm) => {
  axiosClient.post(`/auth/register`, data, config);
};

export const postLoginUser = (data: ILoginForm) => {
  axiosClient.post(`/auth/login`, data, config);
};
export const getConversations = () => {
  return axiosClient.get<Conversation[]>(`/conversations`, config);
};
export const postNewConversation = (data: CreateNewConversationParams) => {
  return axiosClient.post(`/conversations/`, data, config);
};
export const getAuthUser = () => axiosClient.get<User>(`/auth/status`, config);
export const getConversationMessages = (id: number) =>
  axiosClient.get<FetchMessagesType>(`/messages/${id}`, config);
export const getLogoutUser = () => axiosClient.get(`/auth/logout`, config);
export const postMessage = (data: createMessage) => {
  axiosClient.post(`/messages`, data, config);
};

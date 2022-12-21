import axios, { AxiosRequestConfig } from "axios";
import { ILoginForm } from "../components/LoginForm/LoginForm.interface";
import { IRegisterForm } from "../components/RegisterForm/RegisterForm.interface";
import { User } from "./types";

const config: AxiosRequestConfig = { withCredentials: true };

const { VITE_SERVER_URL } = import.meta.env;
const axiosClient = axios.create({ baseURL: VITE_SERVER_URL });
export const postCreateUser = (data: IRegisterForm) => {
  axiosClient.post(`/auth/register`, data, config);
};

export const postLoginUser = (data: ILoginForm) => {
  axiosClient.post(`/auth/login`, data, config);
};

export const getAuthUser = () => axiosClient.get<User>(`/auth/status`, config);

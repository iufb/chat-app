import { createContext } from "react";
import { io } from "socket.io-client";
const { VITE_WEBSOCKET_URL } = import.meta.env;
export const socket = io(VITE_WEBSOCKET_URL);
export const SocketContext = createContext(socket);

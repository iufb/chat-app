import { createContext } from "react";
import { User } from "../types";

export interface IAuthContext {
  user?: User;
  updateAuthUser: (data: User | undefined) => void;
}

export const AuthContext = createContext<IAuthContext>({
  updateAuthUser: () => {},
});

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute/AuthenticatedRoute";
import {
  RegisterPage,
  ConversationPage,
  LoginPage,
  Home,
  DialogPage,
} from "./pages";
import { AuthContext } from "./utils/context/user.context";
import { User } from "./utils/types";
export const App = (): JSX.Element => {
  const [user, setUser] = useState<User>();
  return (
    <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/conversation"
          element={
            <AuthenticatedRoute>
              <ConversationPage />
            </AuthenticatedRoute>
          }
        />
        <Route
          path="/conversation/:id"
          element={
            <AuthenticatedRoute>
              <DialogPage />
            </AuthenticatedRoute>
          }
        />
        <Route path="*" element={<div>No match</div>} />
      </Routes>
    </AuthContext.Provider>
  );
};

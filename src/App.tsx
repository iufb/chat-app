import { PropsWithChildren, useState } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ConversationLayout } from "./layout/ConversationLayout";
import { Layout } from "./layout/Layout";
import { RegisterPage, LoginPage, Home, DialogPage } from "./pages";
import { store } from "./redux/store";
import { socket, SocketContext } from "./utils/context/SocketContext";
import { enableMapSet } from "immer";
import { User } from "./utils/types";
import { AuthContext } from "./utils/context/user.context";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute/AuthenticatedRoute";
enableMapSet();
export const App = (): JSX.Element => {
  const [user, setUser] = useState<User>();
  return (
    <AppProvider user={user} setUser={setUser}>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>No match</div>} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route
            path="conversation"
            element={
              <AuthenticatedRoute>
                <ConversationLayout />
              </AuthenticatedRoute>
            }
          >
            <Route path=":id" element={<DialogPage />} />
          </Route>
        </Route>
      </Routes>
    </AppProvider>
  );
};

type Props = {
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};
function AppProvider({ children, user, setUser }: PropsWithChildren & Props) {
  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
        <SocketContext.Provider value={socket}>
          {children}
        </SocketContext.Provider>
      </AuthContext.Provider>
    </Provider>
  );
}

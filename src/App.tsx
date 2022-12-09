import { Route, Routes } from "react-router-dom";
import {
  RegisterPage,
  ConversationPage,
  LoginPage,
  Home,
  DialogPage,
} from "./pages";
export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/conversation" element={<ConversationPage />} />
        <Route path="/conversation/:id" element={<DialogPage />} />
        <Route path="*" element={<div>No match</div>} />
      </Routes>
    </>
  );
};

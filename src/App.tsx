import { Route, Routes } from "react-router-dom";
import { RegisterPage, ConversationsPage, LoginPage } from "./pages";
export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/conversations" element={<ConversationsPage />} />
        <Route path=":id" element={<div>conversation id page</div>} />
        <Route path="" element={<div>No match</div>} />
      </Routes>
    </>
  );
};

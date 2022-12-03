import { Outlet, Route, Routes } from "react-router-dom";
import { AuthenticationPage } from "./pages";
import { ConversationsPage } from "./pages/ConversationsPage";
export const App = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/conversations" element={<ConversationsPage />} />
        <Route path=":id" element={<div>conversation id page</div>} />
        <Route path="" element={<div>No match</div>} />
      </Routes>
    </>
  );
};

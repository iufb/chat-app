import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./ConversationLayout.module.css";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks/redux";
export const ConversationLayout = (): JSX.Element => {
  const { conversations } = useAppSelector((store) => store.conversations);
  return (
    <>
      <h1 className={styles.title}>All messages</h1>
      <div className={styles.container}>
        {conversations && <Sidebar className={styles.sidebar} />}
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

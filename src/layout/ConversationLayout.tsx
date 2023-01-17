import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";
import { LayoutProps } from "./ConversationLayout.props";
import { FC, useEffect, useState } from "react";
import styles from "./ConversationLayout.module.css";
import { getConversations } from "../utils/api";
import { Conversation } from "../utils/types";
const ConversationLayout = ({ children }: LayoutProps): JSX.Element => {
  const [conversations, setConversations] = useState<Conversation[]>();
  useEffect(() => {
    getConversations().then(({ data }) => setConversations(data));
  }, []);
  return (
    <>
      <Navbar className={styles.navbar} />
      <h1 className={styles.title}>All messages</h1>
      <div className={styles.container}>
        {conversations && (
          <Sidebar conversations={conversations} className={styles.sidebar} />
        )}
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function Wrapper(props: T) {
    return (
      <ConversationLayout>
        <Component {...props} />
      </ConversationLayout>
    );
  };
};

import { Navbar } from "./Navbar/Navbar";
import { Sidebar } from "./Sidebar/Sidebar";
import mockConversations from "../utils/mock/SidebarMessage.mock";
import { LayoutProps } from "./ConversationLayout.props";
import { FC } from "react";
import styles from "./ConversationLayout.module.css";
const ConversationLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar className={styles.navbar} />
      <h1 className={styles.title}>All messages</h1>
      <div className={styles.container}>
        <Sidebar conversations={mockConversations} className={styles.sidebar} />
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

import classNames from "classnames";
import { Button, Tag } from "../../components/ui";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import PencilIcon from "./pencil.svg";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useNavigate } from "react-router-dom";
const SidebarHeader = (): JSX.Element => (
  <div className={styles.header}>
    <div className={styles.title}>
      <p className={styles.headerTitle}>Messages</p>
      <Tag count={40} />
    </div>
    <Button color="dark" size="lg">
      <PencilIcon className={styles.pencil} />
    </Button>
  </div>
);

export const Sidebar = ({
  conversations,
  className,
  ...props
}: SidebarProps): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div {...props} className={classNames(styles.sidebar, className)}>
      <SidebarHeader />
      <div className={styles.items}>
        {conversations.map((conversation) => (
          <SidebarItem
            key={conversation.id}
            conversation={conversation}
            onClick={() => navigate(`/conversation/${conversation.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

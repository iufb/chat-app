import classNames from "classnames";
import { Button, Tag } from "../../components/ui";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreateNewModal } from "../../components/modals/CreateNewModal/CreateNewModal";

export const Sidebar = ({
  conversations,
  className,
  ...props
}: SidebarProps): JSX.Element => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(showModal);
  return (
    <div {...props} className={classNames(styles.sidebar, className)}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p className={styles.headerTitle}>Messages</p>
          <Tag count={40} />
        </div>
        <Button
          color="dark"
          size="lg"
          onClick={() => {
            setShowModal((prev) => !prev);
          }}
        ></Button>
      </div>

      <div className={styles.items}>
        {conversations.map((conversation) => (
          <SidebarItem
            key={conversation.id}
            conversation={conversation}
            onClick={() => navigate(`/conversation/${conversation.id}`)}
          />
        ))}
      </div>
      {showModal && <CreateNewModal setShowModal={setShowModal} />}
    </div>
  );
};

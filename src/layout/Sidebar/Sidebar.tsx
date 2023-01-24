import classNames from "classnames";
import { Button, Tag } from "../../components/ui";
import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CreateNewModal } from "../../components/modals/CreateNewModal/CreateNewModal";
import PencilIcon from "./pencil.svg?component";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux";
import { fetchConversationsThunk } from "../../redux/conversationsSlice/conversationsSlice";
export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { conversations } = useAppSelector((store) => store.conversations);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchConversationsThunk());
  }, [conversations]);
  return (
    <div {...props} className={classNames(styles.sidebar, className)}>
      <div className={styles.header}>
        <div className={styles.title}>
          <p className={styles.headerTitle}>Messages</p>
          <Tag count={Array.from(conversations).length} />
        </div>
        <Button
          color="dark"
          size="lg"
          onClick={() => {
            setShowModal((prev) => !prev);
          }}
          className={styles.newChat}
        >
          <PencilIcon />
        </Button>
      </div>

      <div className={styles.items}>
        {Array.from(conversations, ([_, conversation]) => conversation).map(
          (conversation) => (
            <Link to={`/conversation/${conversation.id}`} key={conversation.id}>
              <SidebarItem conversation={conversation} />
            </Link>
          )
        )}
      </div>
      {showModal && <CreateNewModal setShowModal={setShowModal} />}
    </div>
  );
};

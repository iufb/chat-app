import classNames from "classnames";
import { UserIcon } from "../../components/ui";
import { SidebarItemProps } from "./SidebarItem.props";
import styles from "./SidebarItem.module.css";
import { Conversation, User } from "../../utils/types";
import { AuthContext } from "../../utils/context/user.context";
import { useContext } from "react";
export const SidebarItem = ({
  conversation,
  className,
  ...props
}: SidebarItemProps): JSX.Element => {
  const { user } = useContext(AuthContext);
  const getRecipient = (conversation: Conversation): User => {
    return user?.id === conversation.creator.id
      ? conversation.recipient
      : conversation.creator;
  };
  const recipient = getRecipient(conversation);
  return (
    <div className={classNames(styles.item, className)} {...props}>
      <div className={styles.itemTop}>
        <UserIcon />
        <p
          className={styles.name}
        >{`${recipient.firstName} ${recipient.lastName}`}</p>
      </div>
      <p className={styles.message}>Text</p>
    </div>
  );
};

import classNames from "classnames";
import { UserIcon } from "../../components/ui";
import { SidebarItemProps } from "./SidebarItem.props";
import styles from "./SidebarItem.module.css";
export const SidebarItem = ({
  conversation,
  className,
  ...props
}: SidebarItemProps): JSX.Element => {
  return (
    <div className={classNames(styles.item, className)} {...props}>
      <div className={styles.itemTop}>
        <UserIcon />
        <p className={styles.name}>{conversation.name}</p>
      </div>
      <p className={styles.message}>{conversation.lastMessage}</p>
    </div>
  );
};

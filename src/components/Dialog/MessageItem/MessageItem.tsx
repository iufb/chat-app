import classNames from "classnames";
import { MessageItemProps } from "./MessageItem.props";
import styles from "./MessageItem.module.css";
import { UserIcon } from "../../ui";
import { formatRelative } from "date-fns";
export const MessageItem = ({
  className,
  message,
  role,
  version,
  ...props
}: MessageItemProps): JSX.Element => {
  return (
    <div
      className={classNames(className, styles.container, {
        [styles.loggedUser]: role == "user",
        [styles.recipientUser]: role == "recipient",
      })}
      {...props}
    >
      <UserIcon
        className={classNames({
          [styles.none]: role === "user" || version === "expanded",
        })}
      />
      <div className={styles.right}>
        <div
          className={classNames(styles.title, {
            [styles.none]: version == "expanded",
          })}
        >
          <p className={styles.name}>
            {role == "user" ? "You" : message.author.firstName}
          </p>
          <p className={styles.date}>
            {formatRelative(new Date(message.createdAt), new Date())}
          </p>
        </div>
        <p
          className={classNames({
            [styles.content]: role == "user",
            [styles.recipientContent]: role == "recipient",
            [styles.marginLeft]: version == "expanded" && role == "recipient",
          })}
        >
          {message.content}
        </p>
      </div>
    </div>
  );
};

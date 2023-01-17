import classNames from "classnames";
import { UserIcon } from "../../ui";
import { DialogBarProps } from "./DialogBar.props";
import styles from "./DialogBar.module.css";
export const DialogBar = ({
  recipient,
  className,
  ...props
}: DialogBarProps): JSX.Element => {
  return (
    <div className={classNames(className, styles.bar)} {...props}>
      <UserIcon />
      <div className={styles.user}>
        <h2
          className={styles.userName}
        >{`${recipient.firstName} ${recipient.lastName}`}</h2>
        <p className={styles.email}>
          {recipient.email.slice(0, recipient.email.indexOf("@") + 1)}
        </p>
      </div>
    </div>
  );
};

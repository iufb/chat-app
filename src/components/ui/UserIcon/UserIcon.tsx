import classNames from "classnames";
import { UserIconProps } from "./UserIcon.props";
import styles from "./UserIcon.module.css";
export const UserIcon = ({
  className,
  ...props
}: UserIconProps): JSX.Element => {
  return <div className={classNames(styles.user, className)} {...props} />;
};

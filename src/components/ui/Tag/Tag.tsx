import classNames from "classnames";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";
export const Tag = ({ count, className, ...props }: TagProps): JSX.Element => {
  return (
    <div className={classNames(styles.tag, className)} {...props}>
      {count}
    </div>
  );
};

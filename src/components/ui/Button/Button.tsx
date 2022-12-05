import classNames from "classnames";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
export const Button = ({
  color,
  size,
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.large]: size == "lg",
        [styles.medium]: size == "md",
        [styles.dark]: color == "dark",
        [styles.purple]: color == "purple",
        [styles.white]: color == "white",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

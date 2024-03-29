import classNames from "classnames";
import { LogoProps } from "./Logo.props";
import styles from "./Logo.module.css";
import LogoIcon from "./logo.svg?component";
export const Logo = ({
  size,
  color,
  className,
  ...props
}: LogoProps): JSX.Element => {
  return (
    <div {...props} className={classNames(styles.logo, className)}>
      <h2
        className={classNames(styles.text, {
          [styles.large]: size == "lg",
          [styles.medium]: size == "md",
          [styles.dark]: color == "dark",
        })}
      >
        Chat App
        <LogoIcon />
      </h2>
    </div>
  );
};

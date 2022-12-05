import classNames from "classnames";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
export const Input = ({
  placeholder,
  type,
  className,
  ...props
}: InputProps): JSX.Element => {
  return (
    <input
      className={classNames(styles.input, className)}
      placeholder={placeholder}
      type={type}
      {...props}
    />
  );
};

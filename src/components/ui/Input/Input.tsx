import classNames from "classnames";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import { ForwardedRef, forwardRef } from "react";
export const Input = forwardRef(
  (
    { label, id, type, color, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={styles.block}>
        <input
          className={classNames(styles.input, className, {
            [styles.white]: color == "white",
            [styles.dark]: color == "dark",
          })}
          placeholder=" "
          id={id}
          type={type}
          {...props}
          ref={ref}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
);

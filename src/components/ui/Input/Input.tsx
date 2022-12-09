import classNames from "classnames";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import { ForwardedRef, forwardRef } from "react";
export const Input = forwardRef(
  (
    { placeholder, type, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input
        className={classNames(styles.input, className)}
        placeholder={placeholder}
        type={type}
        {...props}
        ref={ref}
      />
    );
  }
);

import classNames from "classnames";
import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import { ForwardedRef, forwardRef } from "react";
export const Textarea = forwardRef(
  (
    { className, handleChange, value, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <textarea
        className={classNames(className, styles.textarea)}
        placeholder="Send a message"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        {...props}
        ref={ref}
      />
    );
  }
);

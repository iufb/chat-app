import { ForwardedRef, forwardRef } from "react";
import styles from "./ModalLayout.module.css";
import { ModalLayoutProps } from "./ModalLayout.props";
export const ModalLayout = forwardRef(
  (
    { children }: ModalLayoutProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => (
    <div className={styles.layout} ref={ref}>
      {children}
    </div>
  )
);

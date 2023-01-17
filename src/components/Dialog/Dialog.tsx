import classNames from "classnames";
import { DialogProps } from "./Dialog.props";
import { DialogBar } from "./DialogBar/DialogBar";
import { DialogInput } from "./DialogInput/DialogInput";
import styles from "./Dialog.module.css";
import { DialogContainer } from "./DialogContainer/DialogContainer";
export const Dialog = ({ className, ...props }: DialogProps): JSX.Element => {
  const recipent = {
    id: 1,
    firstName: "Nadil",
    lastName: "Bash",
    email: "mis@gmail.com",
  };
  return (
    <div className={classNames(className, styles.container)} {...props}>
      <DialogBar recipient={recipent} className={styles.bar} />
      <DialogContainer />
      <DialogInput className={styles.input} />
    </div>
  );
};

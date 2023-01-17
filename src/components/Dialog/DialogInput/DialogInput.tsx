import classNames from "classnames";
import { Button, Textarea } from "../../ui";
import { DialogInputProps } from "./DialogInput.props";
import styles from "./DialogInput.module.css";
export const DialogInput = ({
  className,
  ...props
}: DialogInputProps): JSX.Element => {
  return (
    <div className={(classNames(className), styles.container)} {...props}>
      <Textarea className={styles.textarea} />
      <Button color="purple" size="md" className={styles.btn}>
        Send
      </Button>
    </div>
  );
};

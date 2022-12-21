import classNames from "classnames";
import { Button, Input } from "../ui";
import { NewConversationFormProps } from "./NewConversationForm.props";
import styles from "./NewConversationForm.module.css";
export const NewConversationForm = ({
  className,
  ...props
}: NewConversationFormProps): JSX.Element => {
  return (
    <form
      className={classNames(styles.form, className)}
      {...props}
      onSubmit={(e) => e.preventDefault()}
    >
      <Input type="text" label="Recipient" color="dark" id="recipient" />
      <Input type="text" label="Message(optional)" color="dark" id="message" />
      <Button color="purple" size="lg">
        Create Conversation
      </Button>
    </form>
  );
};

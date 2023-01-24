import classNames from "classnames";
import { Button, Textarea } from "../../ui";
import { DialogInputProps } from "./DialogInput.props";
import styles from "./DialogInput.module.css";
import { useParams } from "react-router-dom";
import { postMessage } from "../../../utils/api";
import { FormEvent, KeyboardEvent, useState } from "react";
export const DialogInput = ({
  className,
  ...props
}: DialogInputProps): JSX.Element => {
  const [content, setContent] = useState<string>("");
  const { id } = useParams();
  const conversationId = parseInt(id as string);
  const sendMessage = () => {
    postMessage({ conversationId, content });
    setContent("");
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log({ content, conversationId });
      sendMessage();
    } catch (e) {
      console.log(e);
    }
  };
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <form
      className={(classNames(className), styles.container)}
      onSubmit={onSubmit}
      onKeyDown={handleKey}
      {...props}
    >
      <Textarea
        className={styles.textarea}
        value={content}
        handleChange={setContent}
      />
      <Button color="purple" size="md" className={styles.btn}>
        Send
      </Button>
    </form>
  );
};

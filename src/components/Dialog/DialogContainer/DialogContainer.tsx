import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConversationMessages } from "../../../utils/api";
import { Message } from "../../../utils/types";
import { DialogContainerProps } from "./DialogContainer.props";
import styles from "./DialogContainer.module.css";
import { MessageItem } from "../MessageItem/MessageItem";
import { AuthContext } from "../../../utils/context/user.context";
export const DialogContainer = ({
  className,
  ...props
}: DialogContainerProps): JSX.Element => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    if (id) {
      getConversationMessages(parseInt(id))
        .then(({ data }) => setMessages(data))
        .catch((e) => console.log(e));
    }
  }, [id]);
  const formatMessages = () => {
    return messages.map((message, index, arrMessages) => {
      const currentMessage = arrMessages[index];
      const nextMessage = arrMessages[index + 1];
      console.log(message.author);
      return (
        <MessageItem
          key={message.id}
          role={user?.id === message.author.id ? "user" : "recipient"}
          message={message}
          version={
            currentMessage?.author?.id === nextMessage?.author?.id
              ? "expanded"
              : "normal"
          }
        />
      );
    });
  };
  return (
    <div className={classNames(className, styles.container)} {...props}>
      {formatMessages()}
    </div>
  );
};

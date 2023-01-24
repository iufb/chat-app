import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConversationMessages } from "../../../utils/api";
import { FetchMessagesType, Message, MessageEvent } from "../../../utils/types";
import { DialogContainerProps } from "./DialogContainer.props";
import styles from "./DialogContainer.module.css";
import { MessageItem } from "../MessageItem/MessageItem";
import { SocketContext } from "../../../utils/context/SocketContext";
import { useAuth } from "../../../utils/hooks/useAuth";
import { useAppDispatch } from "../../../utils/hooks/redux";
import { fetchMessagesThunk } from "../../../redux/conversationsSlice/conversationsSlice";
export const DialogContainer = ({
  className,
  ...props
}: DialogContainerProps): JSX.Element => {
  const { id } = useParams();
  const { user } = useAuth();
  const socket = useContext(SocketContext);
  const [messages, setMessages] = useState<FetchMessagesType>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      const conversationId = parseInt(id);
      // getConversationMessages(conversationId)
      //   .then(({ data }) => setMessages(data))
      //   .catch((e) => console.log(e));
      dispatch(fetchMessagesThunk(conversationId));
    }
  }, [id]);
  useEffect(() => {
    socket.on("connected", () => console.log("Connected!"));
    socket.on("onMessage", (payload: MessageEvent) => {
      const { conversation, ...message } = payload;
    });
    return () => {
      socket.off("connected");
      socket.off("onMessage");
    };
  }, []);
  console.log(messages);
  const formatMessages = () => {
    return (
      messages &&
      messages.messages.map((message, index, arrMessages) => {
        const currentMessage = arrMessages[index];
        const nextMessage = arrMessages[index + 1];
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
      })
    );
  };
  return (
    <div className={classNames(className, styles.container)} {...props}>
      {formatMessages()}
    </div>
  );
};

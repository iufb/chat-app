import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Message } from "../../../utils/types";
export interface MessageItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  message: Message;
  role: "user" | "recipient";
  version: "expanded" | "normal";
}

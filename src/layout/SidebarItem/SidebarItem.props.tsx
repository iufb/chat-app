import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Conversation } from "../../utils/types";
export interface SidebarItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  conversation: Conversation;
}

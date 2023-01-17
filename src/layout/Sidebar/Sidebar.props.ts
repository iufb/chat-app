import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Conversation } from "../../utils/types";
export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  conversations: Conversation[];
}

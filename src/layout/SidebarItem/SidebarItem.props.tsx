import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ConversationsSidebar } from "../../utils/mock/SidebarMessage.mock";
export interface SidebarItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  conversation: ConversationsSidebar;
}

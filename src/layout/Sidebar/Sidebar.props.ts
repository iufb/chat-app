import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ConversationsSidebar } from "../../utils/mock/SidebarMessage.mock";
export interface SidebarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  conversations: ConversationsSidebar[];
}

import { DetailedHTMLProps, HTMLAttributes } from "react";
import { User } from "../../../utils/types";
export interface DialogBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  recipient: User;
}

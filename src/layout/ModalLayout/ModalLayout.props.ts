import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
export interface ModalLayoutProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

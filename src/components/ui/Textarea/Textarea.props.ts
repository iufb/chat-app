import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface TextareaProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
}

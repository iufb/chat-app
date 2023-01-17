import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color: "dark" | "purple" | "white";
  size: "lg" | "md";
}

export const App = ({ props }: AppProps): JSX.Element => {
  return <div>App</div>;
};

import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";

export const Layout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

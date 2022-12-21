import React, { useContext } from "react";
import classNames from "classnames";
import { NavbarProps } from "./Navbar.props";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { Logo, UserIcon } from "../../components/ui";
import { AuthContext } from "../../utils/context/user.context";

export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
  const { pathname } = useLocation();
  const { updateAuthUser } = useContext(AuthContext);
  const logout = () => {
    updateAuthUser(undefined);
  };
  return (
    <nav {...props} className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <Logo size="md" color="dark" />
        <Link to="/">
          <p
            className={classNames(styles.link, {
              [styles.active]: pathname == "/",
            })}
          >
            Home
          </p>
        </Link>
        <Link to="/conversation">
          <p
            className={classNames(styles.link, {
              [styles.active]: pathname == "/conversation",
            })}
          >
            Messages
          </p>
        </Link>
      </div>
      <div className={styles.right} onClick={logout}>
        <UserIcon />
      </div>
    </nav>
  );
};

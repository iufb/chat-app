import React from "react";
import classNames from "classnames";
import { NavbarProps } from "./Navbar.props";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { Logo, UserIcon } from "../../components/ui";
import { useAuth } from "../../utils/hooks/useAuth";

export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
  const { pathname } = useLocation();
  const { user, signout } = useAuth();
  return (
    <nav {...props} className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <Logo size="md" color="dark" />
        <Link to="/home">
          <p
            className={classNames(styles.link, {
              [styles.active]: pathname == "/home",
            })}
          >
            Home
          </p>
        </Link>
        <Link to="/conversation">
          <p
            className={classNames(styles.link, {
              [styles.active]: pathname.slice(0, 13) == "/conversation",
            })}
          >
            Messages
          </p>
        </Link>
      </div>
      <div className={styles.right} onClick={signout}>
        {user?.firstName}
        <UserIcon />
      </div>
    </nav>
  );
};

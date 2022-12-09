import React from "react";
import classNames from "classnames";
import { NavbarProps } from "./Navbar.props";
import styles from "./Navbar.module.css";
import { Logo, UserIcon } from "../../components/ui";
import ExitIcon from "./exit.svg";
import { Link, useLocation } from "react-router-dom";
export const Navbar = ({ className, ...props }: NavbarProps): JSX.Element => {
  const { pathname } = useLocation();
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
        <Link to="/conversations">
          <p
            className={classNames(styles.link, {
              [styles.active]: pathname == "/conversations",
            })}
          >
            Messages
          </p>
        </Link>
      </div>
      <div className={styles.right}>
        <ExitIcon
          className={styles.exit}
          onClick={() => console.log("Click")}
        />
        <UserIcon />
      </div>
    </nav>
  );
};

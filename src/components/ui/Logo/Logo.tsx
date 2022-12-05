import classNames from "classnames";
import { LogoProps } from "./Logo.props";
import styles from "./Logo.module.css";
import logo from "../../../assets";
export const Logo = ({ className, ...props }: LogoProps): JSX.Element => {
  return (
    <div {...props} className={classNames(styles.logo, className)}>
      <h2 className={styles.text}>Chat App</h2>
      <img src={logo} alt="Logo" className={styles.img} />
    </div>
  );
};

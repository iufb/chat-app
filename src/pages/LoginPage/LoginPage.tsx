import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Logo } from "../../components/ui";
import styles from "./LoginPage.module.css";
export const LoginPage = (): JSX.Element => {
  return (
    <section className={styles.page}>
      <Logo />
      <LoginForm />;
    </section>
  );
};

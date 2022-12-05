import { RegisterForm } from "../../components";
import { Logo } from "../../components/ui";
import styles from "./RegisterPage.module.css";
export const RegisterPage = () => {
  return (
    <section className={styles.page}>
      <Logo />
      <div className={styles.form}>
        <RegisterForm />
      </div>
    </section>
  );
};

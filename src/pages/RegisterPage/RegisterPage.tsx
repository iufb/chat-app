import { RegisterForm } from "../../components";
import { Logo } from "../../components/ui";
import styles from "./RegisterPage.module.css";
export const RegisterPage = () => {
  return (
    <section className={styles.page}>
      <Logo size="lg" />
      <div className={styles.form}>
        <RegisterForm />
      </div>
    </section>
  );
};

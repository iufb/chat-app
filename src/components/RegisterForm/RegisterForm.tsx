import { Button, Input } from "../ui";
import styles from "./RegisterForm.module.css";
export const RegisterForm = (): JSX.Element => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return 1;
  };
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Input placeholder="Email" type="text" />
      <div className={styles.name}>
        <Input placeholder="First Name" type="text" />
        <Input placeholder="Last Name" type="text" />
      </div>
      <Input placeholder="Password" type="password" />
      <Input placeholder="Repeat password" type="password" />
      <Button size="lg" color="white">
        Register
      </Button>
    </form>
  );
};

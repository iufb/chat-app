import { Button, Input } from "../ui";

import styles from "./LoginForm.module.css";
export const LoginForm = (): JSX.Element => {
  return (
    <form className={styles.form}>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button color="white" size="lg">
        Log in
      </Button>
    </form>
  );
};

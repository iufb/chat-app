import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Input } from "../ui";
import { ILoginForm } from "./LoginForm.interface";

import styles from "./LoginForm.module.css";
export const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Username"
        {...register("username", {
          required: true,
        })}
      />
      <Input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: true,
        })}
      />
      <Button color="white" size="lg">
        Log in
      </Button>
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Don't have account?{" "}
          <Link to="/register">
            <span className={styles.footerLink}>Sign Up</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

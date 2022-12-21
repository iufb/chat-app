import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { postLoginUser } from "../../utils/api";
import { Button, Input } from "../ui";
import { ILoginForm } from "./LoginForm.interface";

import styles from "./LoginForm.module.css";
export const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();
  const navigate = useNavigate();
  const onSubmit = async (data: ILoginForm) => {
    try {
      postLoginUser(data);
      navigate("/conversation");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        color="white"
        type="text"
        label="Username"
        id="user"
        {...register("email", {
          required: true,
        })}
      />
      <Input
        color="white"
        type="password"
        label="Password"
        id="password"
        {...register("password", {
          required: true,
        })}
      />
      <Button color="white" size="lg">
        Log in
      </Button>
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Don`&apos`t have account?{" "}
          <Link to="/register">
            <span className={styles.footerLink}>Sign Up</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

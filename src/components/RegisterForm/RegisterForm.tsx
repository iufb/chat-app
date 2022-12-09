import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Input } from "../ui";
import { IRegisterForm } from "./RegisterForm.interface";
import styles from "./RegisterForm.module.css";
export const RegisterForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();
  const onSubmit = (data: IRegisterForm) => {
    console.log(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email", {
          required: { value: true, message: "Please fill in your email" },
        })}
        placeholder="Email"
        type="text"
      />
      <div className={styles.name}>
        <Input
          placeholder="First Name"
          type="text"
          {...register("firstName", {
            required: { value: true, message: "Please fill in your firstName" },
          })}
        />
        <Input
          placeholder="Last Name"
          type="text"
          {...register("lastName", {
            required: { value: true, message: "Please fill in your lastName" },
          })}
        />
      </div>
      <Input placeholder="Password" type="password" />
      <Input placeholder="Repeat password" type="password" />
      <Button size="lg" color="white">
        Register
      </Button>
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Already have account?{" "}
          <Link to="/login">
            <span className={styles.footerLink}>Log in</span>
          </Link>
        </p>
      </div>
    </form>
  );
};

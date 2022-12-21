import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { postCreateUser } from "../../utils/api";
import { Button, Input } from "../ui";
import { IRegisterForm } from "./RegisterForm.interface";
import styles from "./RegisterForm.module.css";
import { RegisterFormProps } from "./RegisterForm.props";
export const RegisterForm = ({ ...props }: RegisterFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();
  const onSubmit = (data: IRegisterForm) => {
    console.log(data);
    postCreateUser(data);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} {...props}>
      <Input
        {...register("email", {
          required: { value: true, message: "Please fill in your email" },
        })}
        color="white"
        label="Email"
        id="email"
        type="text"
      />
      <div className={styles.name}>
        <Input
          color="white"
          label="First Name"
          type="text"
          id="fname"
          {...register("firstName", {
            required: { value: true, message: "Please fill in your firstName" },
          })}
        />
        <Input
          label="Last Name"
          id="lname"
          color="white"
          type="text"
          {...register("lastName", {
            required: { value: true, message: "Please fill in your lastName" },
          })}
        />
      </div>
      <Input
        label="Password"
        id="password"
        color="white"
        type="password"
        {...register("password", {
          required: { value: true, message: "Please fill in your password" },
        })}
      />
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

import classNames from "classnames";
import { Button, Input } from "../ui";
import { NewConversationFormProps } from "./NewConversationForm.props";
import styles from "./NewConversationForm.module.css";
import { useAppDispatch } from "../../utils/hooks/redux";
import { addConversationThunk } from "../../redux/conversationsSlice/conversationsSlice";
import { useForm } from "react-hook-form";
import { CreateNewConversationParams } from "../../utils/types";
export const NewConversationForm = ({
  className,
  ...props
}: NewConversationFormProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewConversationParams>();
  const onSubmit = (data: CreateNewConversationParams) => {
    console.log({ ...data, recipientId: Number(data.recipientId) });
    dispatch(
      addConversationThunk({ ...data, recipientId: Number(data.recipientId) })
    );
  };
  return (
    <form
      className={classNames(styles.form, className)}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        label="Recipient"
        color="dark"
        id="recipient"
        {...register("recipientId", { required: true })}
      />
      <Input
        type="text"
        label="Message(optional)"
        color="dark"
        id="message"
        {...register("message", { required: true })}
      />
      <Button color="purple" size="lg">
        Create Conversation
      </Button>
    </form>
  );
};

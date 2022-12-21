import classNames from "classnames";
import { CreateNewModalProps } from "./CreateNewModal.props";
import styles from "./CreateNewModal.module.css";
import { NewConversationForm } from "../../NewConversationForm/NewConversationForm";
import { ModalLayout } from "../../../layout/ModalLayout/ModalLayout";
import { KeyboardEvent, useEffect, useRef } from "react";
import { useOnClickOutside } from "../../../utils/hooks/useOnClickOutside";
export const CreateNewModal = ({
  setShowModal,
  className,
  ...props
}: CreateNewModalProps): JSX.Element => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) =>
      e.key == "Escape" && setShowModal(false);
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setShowModal(false));
  console.log(ref.current);
  return (
    <ModalLayout>
      <div className={classNames(styles.modal, className)} ref={ref} {...props}>
        <p className={styles.title}>Create new conversation</p>
        <NewConversationForm className={styles.form} />
      </div>
    </ModalLayout>
  );
};

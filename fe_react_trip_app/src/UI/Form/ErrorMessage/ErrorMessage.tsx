import { FieldError } from "react-hook-form";
import styles from "./ErrorMessage.module.scss";

interface ErrorMessageProps {
  fieldError: FieldError | undefined;
}

const ErrorMessage = ({ fieldError }: ErrorMessageProps) => {
  return (
    <>{fieldError && <p className={styles.errorMsg}>{fieldError.message}</p>}</>
  );
};

export default ErrorMessage;

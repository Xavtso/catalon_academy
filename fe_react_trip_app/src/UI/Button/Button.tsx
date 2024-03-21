import { BtnProps } from "types";
import styles from "./Button.module.scss";

export default function Button({ title, size, fillType, onClick }: BtnProps) {

  const btnClassName = `${styles[size]} ${styles[fillType]}`;

  return (
    <button className={btnClassName} type="submit" onClick={onClick}>
      {title}
    </button>
  );
}

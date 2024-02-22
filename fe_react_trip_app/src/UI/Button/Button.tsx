import { BtnReferencesType } from "../../types";
import styles from "./Button.module.scss";

type BtnProps = {
  references: BtnReferencesType;
};

export default function Button({ references }: BtnProps) {
  const { title, size, fillType } = references;

  // Створюємо ім'я класу на основі значень size та fillType
  const btnClassName = `${styles[size]} ${styles[fillType]}`;

  return (
    <button className={btnClassName} type="submit">
      {title}
    </button>
  );
}

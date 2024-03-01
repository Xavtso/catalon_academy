import { BtnReferencesType } from "types";
import styles from "./Button.module.scss";

type BtnProps = {
  references: BtnReferencesType;
  onClick: () => void;
};

export default function Button({ references, onClick }: BtnProps) {
  const { title, size, fillType } = references;

  const btnClassName = `${styles[size]} ${styles[fillType]}`;

  return (
    <button className={btnClassName} type="submit" onClick={onClick}>
      {title}
    </button>
  );
}

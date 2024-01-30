import styles from "./BtnGroup.module.scss";
import ArrowIcon from "../../assets/icons/Button/arrow";
export default function BtnGroup() {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btnMain}>Get Started</button>
      <button className={styles.btnSecondary}>
        Try for free
        <ArrowIcon />
      </button>
    </div>
  );
}

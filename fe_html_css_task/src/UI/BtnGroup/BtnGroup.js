import styles from "./BtnGroup.module.scss";

export default function BtnGroup() {
  const arrowIcon = "/assets/icons/Button/arrow.svg";

  return (
    <div className={styles.btnContainer}>
      <button className={styles.btnMain}>Get Started</button>
      <button className={styles.btnSecondary}>
        Try for free
        <img
          src={arrowIcon}
          alt="arrowIcon"
          width="16px"
          height="16px"
        />
      </button>
    </div>
  );
}

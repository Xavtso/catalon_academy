import styles from "./InfoBar.module.scss";

export default function InfoBar({ info, reversed }) {
  const { percent, text, barIcon } = info;
  
  const barStyles = reversed ? styles.infoBarReversed : styles.infoBar;

  return (
    <div className={barStyles}>
      <div className={styles.iconContainer}>
        <img className={styles.barIcon} src={barIcon} alt="barIcon" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.barPercent}>{percent}</p>
        <p className={styles.barText}>{text}</p>
      </div>
    </div>
  );
}

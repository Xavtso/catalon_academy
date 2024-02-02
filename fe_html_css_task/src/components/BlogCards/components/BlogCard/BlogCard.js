import styles from "./BlogCard.module.scss";

export default function BlogCard({ info }) {
  const arrowTopRight =
    "/assets/icons/Button/arrowTopRight.svg";

  const { imageSrc, tag, time, title, text } = info;

  return (
    <div className={styles.card}>
      <div
        className={styles.imageContainer}
        style={{ background: `url(${imageSrc})` }}
      >
      </div>
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <div className={styles.cardInfo}>
            <p className={styles.cardTag}>{tag}</p>
            <p className={styles.cardTime}>{time}</p>
          </div>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardText}>{text}</p>
        </div>
        <p className={styles.cardBtn}>
          <img src={arrowTopRight} alt="arrowIcon" /> Read more
        </p>
      </div>
    </div>
  );
}

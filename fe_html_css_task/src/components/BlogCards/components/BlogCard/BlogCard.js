import ArrowTopRight from "../../../../assets/icons/Button/arrowTopRight";
import styles from "./BlogCard.module.scss";

export default function BlogCard({ info }) {
  const { imageSrc, tag, time, title, text } = info;

  return (
    <div className={styles.blogCard}>
      <div
        className={styles.imageContainer}
        style={{ background: `url(${imageSrc})` }}
      >
        {/* <img className={styles.cardImage} src={imageSrc} alt="BlogImage" /> */}
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
          <ArrowTopRight /> Read more
        </p>
      </div>
    </div>
  );
}

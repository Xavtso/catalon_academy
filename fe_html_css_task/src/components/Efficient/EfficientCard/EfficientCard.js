import styles from './EfficientCard.module.scss';

export default function EfficientCard({ data }) {
  const { imageSrc, title, text } = data;

  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <img src={imageSrc} alt="icon" width='32' height='32' />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
}

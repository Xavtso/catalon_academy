import styles from './InfoCard.module.scss'

export default function InfoCard({info}) {
    const { imageSrc, title, content } = info;


    return (
      <div className={styles.infoCard}>
        <img
          className={styles.cardImage}
          src={imageSrc}
          alt="infoImage"
          width="100px"
          height="101px"
        />
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardContent}>{content}</p>
      </div>
    );
}
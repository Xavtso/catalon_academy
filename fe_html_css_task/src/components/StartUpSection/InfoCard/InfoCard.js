import styles from './InfoCard.module.scss'

export default function InfoCard({info}) {
    const { imageSrc, title, content } = info;


    return (
        <div className={styles.infoCard}>
            <img className={styles.cardImage} src={imageSrc }  alt='infoImage'/>
            <h3 className={styles.cardTitle}>{title }</h3>
            <p className={styles.cardContent}>{content }</p>
        </div>
    )
}
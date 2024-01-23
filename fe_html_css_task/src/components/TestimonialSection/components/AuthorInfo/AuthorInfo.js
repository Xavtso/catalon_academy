import styles from "./AuthorInfo.module.scss";

export default function AuthorInfo({ imageSrc, name, position }) {
  return (
    <div className={styles.authorContainer}>
      <img src={imageSrc} alt="portrait" />
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
}

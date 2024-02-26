import styles from "./HotTripCard.module.scss";

interface tripData {
  title: string;
  country: string;
  imageSrc: string;
}

export default function HotTripCard({ title, country, imageSrc }: tripData) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={styles.contentBox}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.country}>{country}</p>
      </div>
    </div>
  );
}

import styles from "./TripPoints.module.scss";
import { TripPointsProps } from "types";

export default function TripPoints({ tripPoints }: TripPointsProps) {
  return (
    <div className={styles.tripPointsSection}>
      {tripPoints.map((point, index) => (
        <div key={index} className={`${styles.point} ${styles[point.city]}`}>
          <h5>{point.city}</h5>
          <p>{point.country}</p>
          <div
            className={styles.imgContainer}
            style={{ backgroundImage: `url(${point.imageSrc})` }}
          />
        </div>
      ))}
      <img
        src="/assets/images/TripDetails/TripPoints/TripPointVectorMobileTop.svg"
        alt="vector"
        width="319"
        height="84"
        className={styles.vectorTop}
        />
      <img
        src="/assets/images/TripDetails/TripPoints/TripPointVectorMobileBottom.svg"
        alt="vector"
        width="323"
        height="123"
        className={styles.vectorBottom}
      />
    </div>
  );
}

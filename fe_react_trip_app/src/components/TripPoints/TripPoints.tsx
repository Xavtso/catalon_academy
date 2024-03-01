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
    </div>
  );
}

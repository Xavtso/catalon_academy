import { JourneyDetailsProps } from "types";
import styles from "./JourneyDetails.module.scss";

export default function JourneyDetails({ details }: JourneyDetailsProps) {
  return (
    <div className={styles.detailsSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Detail Trip</h2>
        <p className={styles.description}>{details.description}</p>
        <div className={styles.vector}>
          <img
            alt="tripsVector"
            srcSet="
      /assets/images/TripDetails/detailTripVectorMobile.svg 340w,
      /assets/images/TripDetails/detailTripVector.svg 616w
    "
            sizes="(max-width: 500px) 340px, 616px"
            src="/assets/images/TripDetails/detailTripVector.svg"
          />
        </div>

        {details.tripPoints.map((point, index) => (
          <div className={styles.tripPoint} key={index}>
            <h6>{point.title}</h6>
            <p>{point.description}</p>
          </div>
        ))}
        <p className={styles.conclusion}>{details.conclusion}</p>
      </div>
    </div>
  );
}

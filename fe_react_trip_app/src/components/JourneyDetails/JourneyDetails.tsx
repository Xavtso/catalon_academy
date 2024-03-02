import { JourneyDetailsProps, RootState } from "types";
import styles from "./JourneyDetails.module.scss";
import { useSelector } from "react-redux";

export default function JourneyDetails({ details }: JourneyDetailsProps) {
  const { isMobile } = useSelector((state: RootState) => state.view);

  const vectorSrc = isMobile
    ? "/assets/images/TripDetails/detailTripVectorMobile.svg"
    : "/assets/images/TripDetails/detailTripVector.svg";

  return (
    <div className={styles.detailsSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Detail Trip</h2>
        <p className={styles.description}>{details.description}</p>
        <div className={styles.vector}>
          <img
            src={vectorSrc}
            alt="tripsVector"
            width="6"
            height={isMobile ? "480" : "340"}
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

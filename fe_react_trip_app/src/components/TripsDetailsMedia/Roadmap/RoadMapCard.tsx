import {
  formatDateToDayMonth,
  formatTimeTo12Hour,
} from "@actions/viewActions";
import { RoadmapCardProps } from "@types";
import styles from "./RoadmapCard.module.scss";

export default function RoadMapCard({
  arrival,
  departure,
  tripTitle,
  tripCountry,
}: RoadmapCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.cardTitle}>
          <h3>{tripTitle}</h3>
          <h6>{tripCountry}</h6>
        </div>
        <div className={styles.schedule}>
          <div className={styles.scheduleRow}>
            <div className={styles.textCol}>
              <h6>{formatTimeTo12Hour(departure.time)}</h6>
              <p>{formatDateToDayMonth(departure.date)}</p>
            </div>
            <div className={styles.textCol}>
              <h6>{departure.city}</h6>
              <p>{departure.station}</p>
            </div>
          </div>
          <div className={styles.roadMapIcon}>
            <img
              src="/assets/images/TripDetails/roadMapVector.svg"
              alt="roadMapIcon"
              width="24"
              height="181"

            />
          </div>
          <div className={styles.scheduleRow}>
            <div className={styles.textCol}>
              <h6>{formatTimeTo12Hour(arrival.time)}</h6>
              <p>{formatDateToDayMonth(arrival.date)}</p>
            </div>
            <div className={styles.textCol}>
              <h6>{arrival.city}</h6>
              <p>{arrival.station}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

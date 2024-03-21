import { Trip } from "types";
import TripCard from "../TripCard/TripCard";
import styles from "./TripCardsList.module.scss";

interface TripCardsListProps {
  trips: Trip[];
  title: string;
}

export default function TripCardsList({ trips, title }: TripCardsListProps) {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.tripsList}>
        {trips.map((place: Trip) => (
          <li key={place.id}>
            <TripCard trip={place} />
          </li>
        ))}
      </ul>
    </>
  );
}

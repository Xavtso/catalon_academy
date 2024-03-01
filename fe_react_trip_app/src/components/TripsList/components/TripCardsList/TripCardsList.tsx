import { TripType } from "types";
import TripCard from "../TripCard/TripCard";
import styles from "./TripCardsList.module.scss";

type TripCardsListProps = {
  trips: TripType[];
};

export default function TripCardsList({ trips }: TripCardsListProps) {
  return (
      <ul className={styles.tripsList}>
        {trips.map((place: TripType, index) => (
          <li key={index}>
            <TripCard trip={place} tripIndex={index} />
          </li>
        ))}
      </ul>
  );
}

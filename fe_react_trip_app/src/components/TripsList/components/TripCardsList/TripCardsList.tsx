import { TripType } from "types";
import TripCard from "../TripCard/TripCard";
import styles from "./TripCardsList.module.scss";

type TripCardsListProps = {
  trips: TripType[];
  title: string
};

export default function TripCardsList({ trips,title }: TripCardsListProps) {


  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.tripsList}>
        {trips.map((place: TripType, index) => (
          <li key={index}>
            <TripCard trip={place} tripIndex={index} />
          </li>
        ))}
      </ul>
    </>
  );
}

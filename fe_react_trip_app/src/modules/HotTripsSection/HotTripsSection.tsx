import Container from "@UI/Container/Container";
import HotTripCard from "@components/HotTripCard";
import { TRIP_DATA } from "contstants/tripsData";
import styles from "./HotTripsSection.module.scss";

export default function HotTripsSection() {
  const tripData = TRIP_DATA;

  return (
    <section>
      <Container>
        <h2>
          Explore the World with our <span>Hot Trips</span>
        </h2>
        <div className={styles.tripsList}>
          {tripData.map((trip,index) => (
            <HotTripCard
              key={index}
              title={trip.title}
              country={trip.country}
              imageSrc={trip.imageSrc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

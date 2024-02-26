import Container from "../../UI/Container/Container";
import HotTripCard from "../../components/HotTripCard";
import styles from "./HotTripsSection.module.scss";

export default function HotTripsSection() {
  const tripData = [
    {
      title: "Forest Hike",
      country: "United Kindom, London",
      imageSrc: "assets/images/HotTrips/ForestHike.png",
    },
    {
      title: "Polar Ray",
      country: "United Kindom, London",
      imageSrc: "assets/images/HotTrips/PolarRay.png",
    },
    {
      title: "Yosemite Falls",
      country: "United States, California",
      imageSrc: "assets/images/HotTrips/YosemiteFalls.jpg",
    },
  ];

  return (
    <section>
      <Container>
        <h2>
          Explore the World with our <span>Hot Trips</span>
        </h2>
        <div className={styles.tripsList}>
          {tripData.map((trip) => (
            <HotTripCard
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

import Button from "UI/Button";
import { TripType } from "types";
import RoadMapCard from "./Roadmap/RoadMapCard";
import styles from "./TripDetailsMedia.module.scss";
import ChatButton from "UI/ChatButton";

interface TripDetailsMediaProps {
  trip: TripType;
}

const btnReferences = {
  title: "Book now",
  size: "fullSize",
  fillType: "filled",
};

export default function TripDetailsMedia({ trip }: TripDetailsMediaProps) {
  const { detailed } = trip;

  return (
    <div className={styles.mediaSection}>
      <div
        className={styles.mainImgContainer}
        style={{
          backgroundImage: `url(${detailed.imageDetMain})`,
        }}
      />
      <RoadMapCard
        tripCountry={trip.country}
        tripTitle={trip.city}
        departure={trip.departure}
        arrival={trip.arrival}
      />
      <div className={styles.secondaryImgContainer}>
        {detailed.imageSrcsDet.map((imageSrc, index) => (
          <div
            className={styles.secondaryImg}
            key={index}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        ))}
        <ChatButton position='bottom'/>
      </div>

      <div className={styles.btnContainer}>
        <Button references={btnReferences } onClick={()=>{}}/>
      </div>
    </div>
  );
}

import Button from "UI/Button";
import { TripType } from "types";
import RoadMapCard from "./Roadmap/RoadMapCard";
import styles from "./TripDetailsMedia.module.scss";
import ChatButton from "UI/ChatButton";
import { useState } from "react";

interface TripDetailsMediaProps {
  trip: TripType;
}

const btnReferences = {
  title: "Book now",
  size: "fullSize",
  fillType: "filled",
};

export default function TripDetailsMedia({ trip }: TripDetailsMediaProps) {
  const { imageSrcsDet } = trip.detailed;
  const [mainImg, setMainImg] = useState(imageSrcsDet[0]);

  const filteredImages = imageSrcsDet.filter(
    (image) => image.id !== mainImg.id,
  );

  return (
    <div className={styles.mediaSection}>
      <ChatButton />
      <div
        className={styles.mainImgContainer}
        style={{
          backgroundImage: `url(${mainImg.src})`,
        }}
      />
      <RoadMapCard
        tripCountry={trip.country}
        tripTitle={trip.city}
        departure={trip.departure}
        arrival={trip.arrival}
      />
      <div className={styles.secondaryImgContainer}>
        {filteredImages.map((image) => (
          <div
            onClick={() => setMainImg(image)}
            className={styles.secondaryImg}
            key={image.id}
            style={{ backgroundImage: `url(${image.src})` }}
          />
        ))}
      </div>

      <div className={styles.btnContainer}>
        <Button references={btnReferences} onClick={() => {}} />
      </div>
    </div>
  );
}
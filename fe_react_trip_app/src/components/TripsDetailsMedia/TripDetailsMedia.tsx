import Button from "UI/Button";
import { Trip } from "types";
import RoadMapCard from "./Roadmap/RoadMapCard";
import styles from "./TripDetailsMedia.module.scss";

import { useState } from "react";

interface TripDetailsMediaProps {
  trip: Trip;
}

export default function TripDetailsMedia({ trip }: TripDetailsMediaProps) {
  const { imageSrcsDet } = trip.detailed;
  const [mainImg, setMainImg] = useState(imageSrcsDet[0]);

  const filteredImages = imageSrcsDet.filter(
    (image) => image.id !== mainImg.id,
  );

  return (
    <div className={styles.mediaSection}>
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
        <Button
          title="Book now"
          size="fullSize"
          fillType="filled"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

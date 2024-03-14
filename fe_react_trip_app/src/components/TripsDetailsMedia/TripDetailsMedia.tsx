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
  const { detailed } = trip;
  const [secondaryImages, setSecondaryImages] = useState(
    detailed?.imageSrcsDet,
  );
  const [mainImg, setMainImg] = useState(detailed.imageDetMain);

  // Мені це не подобається!! Тре переробити !!
  function handleMainImgChange(imageSrc: string) {
    const newArr = secondaryImages.filter((src) => src !== imageSrc);
    setSecondaryImages([...newArr, mainImg]);
    setMainImg(imageSrc);
  }

  return (
    <div className={styles.mediaSection}>
      {/* <ChatButton /> */}
      <div
        className={styles.mainImgContainer}
        style={{
          backgroundImage: `url(${mainImg})`,
        }}
      />
      <RoadMapCard
        tripCountry={trip.country}
        tripTitle={trip.city}
        departure={trip.departure}
        arrival={trip.arrival}
      />
      <div className={styles.secondaryImgContainer}>
        {secondaryImages.map((imageSrc, index) => (
          <div
            onClick={() => handleMainImgChange(imageSrc)}
            className={styles.secondaryImg}
            key={index}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        ))}
      </div>

      <div className={styles.btnContainer}>
        <Button references={btnReferences} onClick={() => {}} />
      </div>
    </div>
  );
}

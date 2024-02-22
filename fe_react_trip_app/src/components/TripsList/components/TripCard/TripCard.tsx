import Button from "../../../../UI/Button";
import { TripType } from "../../../../types";
import styles from "./TripCard.module.scss";

type TripCardProps = {
  trip: TripType;
};

export default function TripCard({ trip }: TripCardProps) {
  const { city, dates, totalPrice, imageSrc } = trip;

  const btnReferences = {
    title: 'View Details',
    size: 'nested',
    fillType:'outlined'
  }


  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <div className={styles.titleColumn}>
            <h5>{city}</h5>
            <p>
              <img src="assets/icons/shared/calendar.svg" width='20' height='20.5' alt="dateIcon"/>
              {dates}
            </p>
          </div>
          <img src="assets/icons/shared/star.svg" width='24' height='24'alt="starIcon"/>
        </div>
        <div
          className={styles.imageContainer}
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
        <div className={styles.priceContainer}>
          <div className={styles.priceColumn}>
            <p>Total price:</p>
            <h5>{totalPrice} $</h5>
          </div>
            <Button references={btnReferences}/>
        </div>
      </div>
    </div>
  );
}

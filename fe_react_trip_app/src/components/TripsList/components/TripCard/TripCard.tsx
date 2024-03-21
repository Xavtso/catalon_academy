import { useNavigate } from "react-router-dom";
import Button from "UI/Button";
import { formatDateToMonthDay } from "actions/viewActions";
import { Trip } from "types";
import styles from "./TripCard.module.scss";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const { city, arrival, departure, totalPrice, imageSrc, id } = trip;

  const navigateTo = useNavigate();
  function navToDetails() {
    navigateTo(`/detailed/${id}`);
  }

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <div className={styles.titleColumn}>
            <h5>{city}</h5>
            <p>
              <img
                src="/assets/icons/shared/calendar.svg"
                width="20"
                height="20.5"
                alt="dateIcon"
              />
              {`${formatDateToMonthDay(
                departure.date,
              )} - ${formatDateToMonthDay(arrival.date)}`}
            </p>
          </div>
          <img
            src="/assets/icons/shared/star.svg"
            width="24"
            height="24"
            alt="starIcon"
          />
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
          <Button
            title="View Details"
            size="nested"
            fillType="outlined"
            onClick={navToDetails}
          />
        </div>
      </div>
    </div>
  );
}

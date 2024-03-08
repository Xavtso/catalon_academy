import { useNavigate } from "react-router-dom";
import Button from "UI/Button";
import { formatDateToMonthDay } from "actions/viewActions";
import { TripType } from "types";
import styles from "./TripCard.module.scss";

type TripCardProps = {
  trip: TripType;
  tripIndex: number;
  listIndex: number;
};

export default function TripCard({
  trip,
  tripIndex,
  listIndex,
}: TripCardProps) {
  const { city, arrival, departure, totalPrice, imageSrc} = trip;

  const btnReferences = {
    title: "View Details",
    size: "nested",
    fillType: "outlined",
  };

  const navigateTo = useNavigate();
  function navToDetails() {
    navigateTo(`/detailed/${listIndex}/trips/${tripIndex}`);
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
          <Button references={btnReferences} onClick={navToDetails} />
        </div>
      </div>
    </div>
  );
}

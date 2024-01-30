import styles from "./PriceCard.module.scss";
import greenCard from "../../../assets/icons/Pricing/image 5greenCard.png";
import GreenMark from "../../../assets/icons/Pricing/GreenMark";
import darkCard from "../../../assets/icons/Pricing/image 7darkCard.png";
import DarkMark from "../../../assets/icons/Pricing/DarkMark";

export default function PriceCard({ info }) {
  const { plan, priceMonth, priceYear, listItems, main } = info;
  const [amount, unit] = priceMonth.match(/(\$\d+)\s*\/(\w+)/).slice(1);
  const cardStyles = main ? styles.mainCard : styles.priceCard;

  return (
    <div className={cardStyles}>
      <div className={styles.contentContainer}>
        <div className={styles.cardIcon}>
          <img src={main ? darkCard : greenCard} alt="cardIcon" />
        </div>
        <div className={styles.priceContainer}>
          <h3 className={styles.plan}>{plan}</h3>
          <h1 className={styles.priceMonth}>
            {amount}
            <span className={styles.month}>/{unit}</span>
          </h1>
          <h4 className={styles.priceYear}>{priceYear}</h4>
        </div>
        <hr className={styles.rule}></hr>
        <div className={styles.listContainer}>
          <p className={styles.listLabel}>Includes:</p>
          <ul className={styles.itemsList}>
            {listItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {main ? <DarkMark /> : <GreenMark />} {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className={styles.cardBtn}>Get started</button>
    </div>
  );
}

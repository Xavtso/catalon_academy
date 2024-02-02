import styles from "./PriceCard.module.scss";

export default function PriceCard({ info }) {
  const greenCard = "/assets/icons/Pricing/greenCard.png";
  const GreenMark = "/assets/icons/Pricing/GreenMark.svg";
  const darkCard = "/assets/icons/Pricing/darkCard.png";
  const DarkMark = "/assets/icons/Pricing/DarkMark.svg";

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
                <img src={main ? DarkMark : GreenMark} alt="markIcon" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className={styles.cardBtn}>Get started</button>
    </div>
  );
}

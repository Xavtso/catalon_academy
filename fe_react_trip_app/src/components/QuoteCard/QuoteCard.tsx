import styles from "./QuoteCard.module.scss";

export default function QuoteCard() {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <img
            src="assets/icons/shared/quote.svg"
            alt="quoteIcon"
            width="32"
            height="32"
          />
        </div>
        <p className={styles.quoteText}>
          Embark on <span>extraordinary</span> journeys with us. Our{" "}
          <span>travel experiences</span> are meticulously crafted, ensuring
          seamless <span>adventures</span> tailored just for you. Discover
          <span>unparalleled</span> service, <span>attention</span> to detail,
          and a commitment to making every moment <span>unforgettable</span>.
          Choose us for a travel experience beyond the <span>ordinary</span>
        </p>
        <div className={styles.iconContainer2}>
          <img
            src="assets/icons/shared/quote.svg"
            alt="quoteIcon"
            width="32"
            height="32"
          />
        </div>
        <p className={styles.author}>
          <span>SEO: </span>Jane Cooper
        </p>
      </div>
    </div>
  );
}

import styles from "./PricingSection.module.scss";
import SectionName from "../../UI/SectionName";
import CardsList from "../../components/PriceCard/CardsList/CardList";
import VectorPricing from "../../images/icons/backgrounds/vectorPricing";

export default function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.contentContainer}>
        <div className={styles.vector}>
          <VectorPricing />
        </div>
        <div className={styles.textContainer}>
          <SectionName sectionName={"Pricing"} />
          <h2 className={styles.title}>Pricing plans </h2>
          <p className={styles.subtitle}>
            Suspendisse mattis porttitor gravida et malesuada fames.
          </p>
        </div>
        <CardsList />
      </div>
    </section>
  );
}

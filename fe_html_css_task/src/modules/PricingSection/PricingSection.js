import styles from "./PricingSection.module.scss";
import CardsList from "../../components/PriceCard/CardsList/CardList";
import VectorPricing from "../../assets/icons/backgrounds/vectorPricing";
import TitleContainer from "../../components/TitleContainer";

export default function PricingSection() {
  const data = {
    tag: "Pricing",
    title: "Pricing Plans",
    subtitle: "Suspendisse mattis porttitor gravida et malesuada fames.",
  };
  return (
    <section className={styles.pricingSection}>
      <div className={styles.contentContainer}>
        <div className={styles.vector}>
          <VectorPricing />
        </div>
        <TitleContainer info={data} center={true} titleStyle={"big"} />
        <CardsList />
      </div>
    </section>
  );
}

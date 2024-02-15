import styles from "./PricingSection.module.scss";
import CardsList from "../../components/PriceCard/CardsList/CardList";
import TitleContainer from "../../components/TitleContainer";
import Container from "../../UI/Container";

export default function PricingSection() {
  const vectorSrc = "/assets/icons/backgrounds/vectorPricing.svg";
 
  const data = {
    tag: "Pricing",
    title: "Pricing Plans",
    subtitle: "Suspendisse mattis porttitor gravida et malesuada fames.",
  };
  return (
    <section className={styles.pricingSection}>
      <Container direction={"column"}>
        <div className={styles.vector}>
          <img
            src={vectorSrc}
            alt="bg-vector"
            width='130'
            height='92'
          />
        </div>
        <TitleContainer info={data} center={true} titleStyle={"big"} />
        <CardsList />
      </Container>
    </section>
  );
}

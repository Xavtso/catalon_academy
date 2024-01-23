import MainCard from "../MainCard/MainCard";
import PriceCard from "../PriceCard/PriceCard";
import styles from "./CardsList.module.scss";

export default function CardsList() {
  const data = {
    card1: {
      plan: "Basic plan",
      priceMonth: "$19 /mo",
      priceYear: "or $199 yearly",
      listItems: [
        "Vestibulum posuere odio",
        "Id purus maximus condimentum",
        "Vel convallis nibh duis",
      ],
    },
    card2: {
      plan: "Business plan",
      priceMonth: "$29 /mo",
      priceYear: "or $299 yearly",
      listItems: [
        "Maximus condimentum turpis",
        "Nullam faucibus dictum accumsan",
        "Vivamus ante dolor",
        "Purus in convallis pharetra",
      ],
    },
    card3: {
      plan: "Enterprise plan",
      priceMonth: "$49 /mo",
      priceYear: "or $499 yearly",
      listItems: [
        "Phasellus finibus lectus",
        "At blandit mollis maecenas",
        "Nec ultrices lectus eune",
        "Mattis facilisis lacus aliquet",
        "Am condimentum cursus",
      ],
    },
  };

  return (
    <div className={styles.cardsContainer}>
      <PriceCard info={data.card1} />
      <MainCard info={data.card2} />
      <PriceCard info={data.card3} />
    </div>
  );
}

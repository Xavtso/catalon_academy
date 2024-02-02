import InfoCard from "../InfoCard/InfoCard";

import styles from "./InfoCardsList.module.scss";

export default function InfoCardsList() {
  const cardIcon1 = "/assets/images/StartUp/card1.png";
  const cardIcon2 = "/assets/images/StartUp/card2.png";
  const cardIcon3 = "/assets/images/StartUp/card3.png";

  const data = [
    {
      imageSrc: cardIcon1,
      title: "Better results",
      content:
        "Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.",
    },
    {
      imageSrc: cardIcon2,
      title: "Less paper work",
      content:
        "Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.",
    },
    {
      imageSrc: cardIcon3,
      title: "More profit",
      content:
        "Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.",
    },
  ];

  return (
    <ul className={styles.cardsList}>
      {data.map((item, index) => (
        <li key={index}>
          <InfoCard info={item} />
        </li>
      ))}
    </ul>
  );
}

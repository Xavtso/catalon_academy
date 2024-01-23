import InfoCard from "../InfoCard/InfoCard";
import cardIcon1 from "../../../images/StartUp/IMAGEup1.png";
import cardIcon2 from "../../../images/StartUp/IMAGEup2.png";
import cardIcon3 from "../../../images/StartUp/IMAGEup3.png";
import styles from './InfoCardsList.module.scss';

export default function InfoCardsList() {
  const data = {
    card1: {
      imageSrc: cardIcon1,
      title: "Better results",
      content:
        "Vestibulum posuere odio id purus maximus, vel condimentum nunc tincidunt. Duis sit amet vulputa.",
    },
    card2: {
      imageSrc: cardIcon2,
      title: "Less paper work",
      content:
        "Duis convallis eros eu dolor posuere, sit amet mollis turpis elementum. Aliquam ut sapien enim.",
    },
    card3: {
      imageSrc: cardIcon3,
      title: "More profit",
      content:
        "Donec tincidunt est pellentesque, ullamcorper quam sed, aliquam eros. Proin finibus luctus nisi.",
    },
  };

  return (
    <div className={styles.cardsList}>
          <InfoCard info={data.card1} />
          <InfoCard info={data.card2} />
          <InfoCard info={data.card3} />
    </div>
  );
}

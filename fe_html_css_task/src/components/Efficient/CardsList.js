import EfficientCard from "./EfficientCard/EfficientCard";
import icon1 from "../../images/Efficient/image 2not-allowed.png";
import icon2 from "../../images/Efficient/image 3clock.jpg";
import styles from './CardsList.module.scss';

export default function CardsList() {
  const data = {
    card1: {
      imageSrc: icon1,
      title: "No meetings",
      text: "Porta non eros. Ut finibus viverra neque, sed vestibulum tellus volutpat ac cras at massa.",
    },
    card2: {
      imageSrc: icon2,
      title: "24/7 customer support",
      text: "Praesent consequat erat in orci lobortis, in accumsan orci vestibulum nam et dictum.",
    },
  };

  return (
    <div className={styles.cardsList}>
      <EfficientCard data={data.card1}/>
      <EfficientCard data={data.card2}/>
    </div>
  );
}

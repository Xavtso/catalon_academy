import EfficientCard from "./EfficientCard/EfficientCard";
import icon1 from "../../assets/icons/Efficient/image 2not-allowed.png";
import icon2 from "../../assets/icons/Efficient/image 3clock.jpg";
import styles from './CardsList.module.scss';

export default function CardsList() {
  const data = [
     {
      imageSrc: icon1,
      title: "No meetings",
      text: "Porta non eros. Ut finibus viverra neque, sed vestibulum tellus volutpat ac cras at massa.",
    },
    {
      imageSrc: icon2,
      title: "24/7 customer support",
      text: "Praesent consequat erat in orci lobortis, in accumsan orci vestibulum nam et dictum.",
    },
  ];

  return (
    <ul className={styles.cardsList}>
      {data.map((item, index) => (
        <li key={index}>
          <EfficientCard data={item} />
        </li>
      ))}
    </ul>
  );
}

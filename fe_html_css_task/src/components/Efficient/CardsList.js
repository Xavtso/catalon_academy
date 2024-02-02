import EfficientCard from "./EfficientCard/EfficientCard";

import styles from "./CardsList.module.scss";

export default function CardsList() {
  const icon1 = "/assets/icons/Efficient/not-allowed.png";
  const icon2 = "/assets/icons/Efficient/clockIcon.jpg";

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
    <ul className={styles.list}>
      {data.map((item, index) => (
        <li key={index}>
          <EfficientCard data={item} />
        </li>
      ))}
    </ul>
  );
}

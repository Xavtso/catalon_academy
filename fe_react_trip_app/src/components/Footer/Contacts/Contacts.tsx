import styles from "./Contacts.module.scss";

export default function Contacts() {
  const data = [
    {
      icon: "assets/icons/shared/phone.svg",
      width: "30",
      height: "30",
      url: "tel:+12345678901",
      text: "+123 45 678 901",
    },
    {
      icon: "assets/icons/shared/mail.svg",
      width: "30",
      height: "23.33",
      url: "mailto:somemail@gmail.com",
      text: "somemail@gmail.com",
    },
    {
      icon: "assets/icons/shared/location.svg",
      width: "23.33",
      height: "30",
      url: "https://www.google.com/maps/search/?api=1&query=40.857395413393135, -74.03681251693186",
      text: "Avenue St. 432 , New York",
    },
  ];

  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li className={styles.listItem}>
          <a className={styles.icon} rel="noopener noreferrer" href={item.url}>
            <img src={item.icon} alt="contactIcon" width="30" height="30" />
          </a>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

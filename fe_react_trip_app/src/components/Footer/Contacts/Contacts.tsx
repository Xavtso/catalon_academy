import { CONTACTS_DATA } from "contstants/tripsData";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  const data = CONTACTS_DATA;

  return (
    <ul className={styles.list}>
      {data.map((item,index) => (
        <li key={index} className={styles.listItem}>
          <a className={styles.icon} rel="noopener noreferrer" href={item.url}>
            <img src={item.icon} alt="contactIcon" width="30" height="30" />
          </a>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

import { NAV_LISTS } from "contstants/footerData";
import styles from "./NavLists.module.scss";

export default function NavLists() {
  const { list1, list2, list3, list4 } = NAV_LISTS;

  return (
    <div className={styles.listsContainer}>
      <ul>
        <h6>about</h6>
        {list1.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <a href="/" rel="noopener noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        <h6>company</h6>
        {list2.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <a href="/" rel="noopener noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        <h6>resources</h6>
        {list3.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <a href="/" rel="noopener noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        <h6>Social</h6>
        {list4.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <a href="/" rel="noopener noreferrer">
              <img
                src={item.icon}
                alt="socialIcon"
                width="16.67"
                height="16.67"
              />{" "}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

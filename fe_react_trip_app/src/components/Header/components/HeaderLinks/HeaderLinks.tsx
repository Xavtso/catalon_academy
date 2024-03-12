import { HEADER_LINKS } from "contstants/headerData";
import styles from "./HeaderLinks.module.scss";
import { useState } from "react";

export default function HeaderLinks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const links = HEADER_LINKS;

  return (
    <ul className={styles.linksList}>
      {links.map((item, index) => (
        <li
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`${styles.link} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <a href="/">{item}</a>
        </li>
      ))}
    </ul>
  );
}

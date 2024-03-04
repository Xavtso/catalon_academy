import { HEADER_LINKS } from "contstants/headerData";
import styles from "./Header.module.scss";
import HeaderMobile from "./components/HeaderMobile";

export default function Header() {
  const links = HEADER_LINKS;

  return (
    <header>
      <nav className={styles.navbar}>
        <a href="/" rel="noopener noreferrer">
          <img
            src="/assets/icons/shared/logo.svg"
            alt="logo"
            width="46"
            height="60"
          />
        </a>
        <ul className={styles.linksList}>
          {links.map((item, index) => (
            <li key={index} className={styles.link}>
              <a href="/" rel="noopener noreferrer">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className={styles.userActives}>
          <li className={styles.userLink}>
            <a href="/" rel="noopener noreferrer">
              <img
                src="/assets/icons/shared/star.svg"
                alt="star"
                width="20"
                height="20"
              />
            </a>
          </li>
          <li className={styles.userLink}>
            <a href="/" rel="noopener noreferrer">
              <img
                src="/assets/icons/shared/user.svg"
                alt="user"
                width="32"
                height="32"
              />
            </a>
          </li>
        </ul>
      </nav>
        <HeaderMobile/>
    </header>
  );
}

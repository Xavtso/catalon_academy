import styles from "./Header.module.scss";
import HeaderMobile from "./components/HeaderMobile";
import HeaderLinks from "./components/HeaderLinks/HeaderLinks";

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <a href="/">
          <img
            src="/assets/icons/shared/logo.svg"
            alt="logo"
            width="46"
            height="60"
          />
        </a>
        <HeaderLinks />
        <ul className={styles.userActives}>
          <li className={styles.userLink}>
            <a href="/">
              <img
                src="/assets/icons/shared/star.svg"
                alt="star"
                width="20"
                height="20"
              />
            </a>
          </li>
          <li className={styles.userLink}>
            <a href="/">
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
      <HeaderMobile />
    </header>
  );
}

import { useState } from "react";
import { createPortal } from "react-dom";
import MobileMenu from "../MobileMenu";
import styles from "./HeaderMobile.module.scss";

export default function HeaderMobile() {
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleMenuOpen() {
    setIsActive(!isActive);
  }

  return (
    <nav className={styles.navbarMobile}>
      <img
        onClick={handleMenuOpen}
        src="/assets/icons/shared/hamburger.svg"
        width="24"
        height="24"
        alt="menu"
      />
      <a className={styles.logo} href="/">
        <img
          src="/assets/icons/shared/logo.svg"
          alt="logo"
          width="30.67"
          height="40"
        />
      </a>
      <ul className={styles.userActives}>
        <li className={styles.userLink}>
          <a href="/">
            <img
              src="/assets/icons/shared/searchBlack.svg"
              alt="search"
              width="24"
              height="24"
            />
          </a>
        </li>
        <li className={styles.userLink}>
          <a href="/">
            <img
              src="/assets/icons/shared/user.svg"
              alt="user"
              width="24"
              height="24"
            />
          </a>
        </li>
      </ul>

      {isActive
        ? createPortal(<MobileMenu onClose={handleMenuOpen} />, document.body)
        : null}
    </nav>
  );
}

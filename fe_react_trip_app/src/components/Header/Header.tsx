import { useState } from "react";
import { HEADER_LINKS } from "contstants/tripsData";
import styles from "./Header.module.scss";
import { createPortal } from "react-dom";
import MobileMenu from "./components/MobileMenu";
import { useSelector } from "react-redux";
import { RootState } from "@types";

export default function Header() {
  const links = HEADER_LINKS;
  const [isActive, setIsActive] = useState<boolean>(false);
  const { isMobile } = useSelector((state: RootState) => state.view);

  function handleMenuOpen() {
    setIsActive(!isActive);
  }

  const laptop = (
    <>
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
    </>
  );

  const mobile = (
    <>
      <img
        onClick={handleMenuOpen}
        src="/assets/icons/shared/hamburger.svg"
        width="24"
        height="24"
        alt="menu"
      />
      <a className={styles.logo} href="/" rel="noopener noreferrer">
        <img
          src="/assets/icons/shared/logo.svg"
          alt="logo"
          width="30.67"
          height="40"
        />
      </a>
      <ul className={styles.userActives}>
        <li className={styles.userLink}>
          <a href="/" rel="noopener noreferrer">
            <img
              src="/assets/icons/shared/searchBlack.svg"
              alt="search"
              width="24"
              height="24"
            />
          </a>
        </li>
        <li className={styles.userLink}>
          <a href="/" rel="noopener noreferrer">
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
    </>
  );

  return (
    <header>
      <nav className={styles.navbar}>
        {isMobile ? mobile : laptop}
      </nav>
    </header>
  );
}

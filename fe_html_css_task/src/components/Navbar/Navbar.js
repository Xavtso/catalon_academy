import styles from "./Navbar.module.scss";

export default function Navbar() {
  const logo = "/assets/icons/backgrounds/logo.svg";
  
  
  const links = [
    "Our Story",
    "Blog",
    "Contact",
    "Pricing",
    "Log in",
    "Try for free",
  ];

  return (
    <nav className={styles.container}>
      <img src={logo} alt="logo" width="112px" height="28px" />
      <ul className={styles.navItems}>
        {links.map((item, index) => (
          <li className={styles.navItem} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

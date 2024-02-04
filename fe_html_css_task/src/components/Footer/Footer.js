import SocialLinks from "../SocialLinks";
import styles from "./Footer.module.scss";

export default function Footer() {
  const logo = "/assets/icons/backgrounds/logoFooter.svg";

  const list1 = [
    "Pages",
    "Home v1",
    "Home v2",
    "Home v3",
    "About v1",
    "About v2",
    "About v3",
    "Contact v1",
    "Contact v2",
    "Contact v3",
    "Blog",
    "Pricing",
    "Log in",
    "Sign up",
  ];
  const list2 = ["CMS pages", "Blog Post", "Blog Categories"];
  const list3 = [
    "Utility pages",
    "Style guide",
    "Licenses",
    "Changelog",
    "404",
    "Password",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContact}>
          <img src={logo} alt="logoIcon" width="112px" height="30px" />
          <address>
            <p>Address:</p>
            <p>Level 1, 12 Nikola Tesla street, Niš, Serbia</p>
          </address>
          <address>
            <p>Contact:</p>
            <p>1800 123 4567</p>
            <p>info@startico.io</p>
          </address>
        </div>
        <div className={styles.footerLists}>
          <ul>
            {list1.map((item, index) => (
              <li key={index}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
          <ul>
            {list2.map((item, index) => (
              <li key={index}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
          <ul>
            {list3.map((item, index) => (
              <li key={index}>
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr></hr>
      <div className={styles.linksContainer}>
        <p>© Startico by Minima Square. Powered by Webflow</p>
        <SocialLinks />
      </div>
    </footer>
  );
}

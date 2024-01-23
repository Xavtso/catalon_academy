import Logo from "../../images/icons/backgrounds/logo";
import SocialLinks from "../SocialLinks";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section>
        <div className={styles.footerContact}>
          <Logo/>
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
            <li>Pages</li>
            <li>Home v1</li>
            <li>Home v2</li>
            <li>Home v3</li>
            <li>About v1</li>
            <li>About v2</li>
            <li>About v3</li>
            <li>Contact v1</li>
            <li>Contact v2</li>
            <li>Contact v3</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Log in</li>
            <li>Sign up</li>
          </ul>
          <ul>
            <li>CMS pages</li>
            <li>Blog Post</li>
            <li>Blog Categories</li>
          </ul>
          <ul>
            <li>Utility pages</li>
            <li>Style guide</li>
            <li>Licenses</li>
            <li>Changelog</li>
            <li>404</li>
            <li>Password</li>
          </ul>
        </div>
      </section>
      <hr></hr>
      <section>
        <p>© Startico by Minima Square. Powered by Webflow</p>
        <SocialLinks/>
      </section>
    </footer>
  );
}

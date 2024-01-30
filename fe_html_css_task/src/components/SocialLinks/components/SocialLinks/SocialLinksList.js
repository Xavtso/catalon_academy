import Linkedin from "../../../../assets/icons/Footer/Linkedin";
import Twitter from "../../../../assets/icons/Footer/Twitter";
import Facebook from "../../../../assets/icons/Footer/Facebook";
import styles from "./SocialLinksList.module.scss";

function SocialLinks() {
  return (
    <ul className={styles.socialLinks}>
      <li className={styles.socialLink}>
        <Linkedin />
      </li>
      <li>
        <div className={styles.socialLink}>
          <Twitter />
        </div>
      </li>
      <li>
        <div className={styles.socialLink}>
          <Facebook />
        </div>
      </li>
    </ul>
  );
}
export default SocialLinks;

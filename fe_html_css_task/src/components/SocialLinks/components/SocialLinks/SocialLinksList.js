import Linkedin from "../../../../images/icons/Footer/Linkedin";
import Twitter from "../../../../images/icons/Footer/Twitter";
import Facebook from "../../../../images/icons/Footer/Facebook";
import styles from "./SocialLinksList.module.scss";

function SocialLinks() {


  return (
    <ul className={styles.socialLinks}>
        <li>
          <figure className={styles.socialLink}>
            <Linkedin />
          </figure>
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

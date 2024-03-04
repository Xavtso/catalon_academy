import { HEADER_LINKS } from "contstants/headerData";
import styles from "./MobileMenu.module.scss";

export default function MobileMenu(props:any) {
  const links = HEADER_LINKS;

  function closeMenu() {
    props.onClose();
  }


  return (
    <div className={styles.overflow}>
      <div className={styles.menuBody}>
        <div className={styles.closeIcon} >
          <img
            onClick={closeMenu}
            src="/assets/icons/shared/close.svg"
            alt="closeIcon"
            width="24"
            height="24"
          />
        </div>
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <a href="/" rel="noopener noreferrer">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.btnLogOut}>
          Log Out
        </div>
      </div>
    </div>
  );
}

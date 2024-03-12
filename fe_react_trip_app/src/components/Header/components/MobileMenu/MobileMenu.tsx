import styles from "./MobileMenu.module.scss";
import HeaderLinks from "../HeaderLinks";

export default function MobileMenu(props: any) {
  function closeMenu() {
    props.onClose();
  }

  return (
    <div className={styles.overflow}>
      <div className={styles.menuBody}>
        <div className={styles.closeIcon}>
          <img
            onClick={closeMenu}
            src="/assets/icons/shared/close.svg"
            alt="closeIcon"
            width="24"
            height="24"
          />
        </div>
        <HeaderLinks />
        <div className={styles.btnLogOut}>Log Out</div>
      </div>
    </div>
  );
}

import Container from "../../UI/Container/Container";
import Contacts from "./Contacts/Contacts";
import NavLists from "./NavLists/NavLists";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Contacts />
        <div className={styles.rule} />
        <NavLists />
      </Container>
    </footer>
  );
}

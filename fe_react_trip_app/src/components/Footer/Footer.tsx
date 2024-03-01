import Container from "UI/Container";
import Contacts from "./Contacts/Contacts";
import NavLists from "./NavLists/NavLists";
import styles from "./Footer.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "types";

export default function Footer() {
  const { isMobile } = useSelector((state: RootState) => state.view);

  const laptop = (
    <Container>
      <Contacts />
      <div className={styles.rule} />
      <NavLists />
    </Container>
  );

  const mobile = (
    <Container>
      <NavLists />
      <Contacts />
    </Container>
  );

  return <footer>{isMobile ? mobile : laptop}</footer>;
}

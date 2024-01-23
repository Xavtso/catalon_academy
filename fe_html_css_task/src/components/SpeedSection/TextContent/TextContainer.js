import styles from './TextContainer.module.scss';
import SectionName from '../../../UI/SectionName';
import BtnGroup from '../../../UI/BtnGroup';

export default function TextContainer() {
    return (
      <aside className={styles.textContainer}>
        <SectionName sectionName={"Speed"} />
        <h2 className={styles.title}>Faster then ever before</h2>
        <p className={styles.content}>
          Morbi tristique cursus diam, at viverra felis malesuada eu. Duis
          iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi eget
          varius. Phasellus rutrum pellentesque lectus pulvinar dapibus aenean
          dui justro, tempus sed oido.
        </p>
        <BtnGroup />
      </aside>
    );
}
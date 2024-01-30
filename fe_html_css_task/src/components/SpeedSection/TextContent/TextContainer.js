import styles from './TextContainer.module.scss';
import BtnGroup from '../../../UI/BtnGroup';
import TitleContainer from '../../TitleContainer';

export default function TextContainer() {
  const data = {
    tag: 'Speed',
    title: 'Faster than ever before',
    subtitle: 'Morbi tristique cursus diam, at viverra felis malesuada eu. Duis iaculis velit ac urna fermentum interdum. Ut auctor vitae nisi eget varius. Phasellus rutrum pellentesque lectus pulvinar dapibus aenean dui justro, tempus sed oido.'
  }


    return (
      <aside className={styles.container}>
        <TitleContainer info={data}/>
        <BtnGroup />
      </aside>
    );
}
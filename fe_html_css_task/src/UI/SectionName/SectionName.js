import styles from './SectionName.module.scss';

export default function SectionName({ sectionName }) {
    return (
        <p className={styles.nameContainer}>{sectionName}</p>
    )
}
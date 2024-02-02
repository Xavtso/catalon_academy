import styles from './SectionName.module.scss';

export default function SectionName({ tag }) {
    return (
        <h2 className={styles.nameContainer}>{tag}</h2>
    )
}
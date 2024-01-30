import styles from './SectionName.module.scss';

export default function SectionName({ tag }) {
    return (
        <p className={styles.nameContainer}>{tag}</p>
    )
}
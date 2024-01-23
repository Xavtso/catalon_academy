import styles from './Input.module.scss';

export default function Input({placeholder}) {
    return (
        <input className={styles.formInput} type="text" placeholder={placeholder} required={true} />
    )
};
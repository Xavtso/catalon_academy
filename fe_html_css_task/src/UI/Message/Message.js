import styles from './Message.module.scss'

export default function Message({ onClose }) {
    function handleClose() {
        onClose();
    }

    return (
        <div className={styles.messageContainer}>
            <p className={styles.messageText}>Explore all our services.</p>
            <i className= {styles.closeIcon} onClick={handleClose}></i>
        </div>
    )
}
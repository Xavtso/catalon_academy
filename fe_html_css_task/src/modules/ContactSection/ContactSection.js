import EmailForm from '../../components/EmailForm'
import styles from './ContactSection.module.scss'

export default function ContactSection() {
    return (
        <section className={styles.contactSection}>
            <EmailForm/>
        </section>
    )
}
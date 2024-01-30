import EmailForm from '../../../components/EmailForm';
import styles from './FeedbackSection.module.scss';

export default function FeedbackSection() {
    return (
        <section className={styles.container}>
            <EmailForm/>
        </section>
    )
}
import Button from '../../UI/Button'
import styles from './HeroSection.module.scss'

export default function HeroSection(){
    return (
        <section className={styles.heroSection}>
            <div className={styles.imageContainer}>
                <Button btnClassName={styles.btnHero} text={'Watch Introduction'}/>
            </div>
        </section>
    )
}
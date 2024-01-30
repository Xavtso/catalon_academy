import styles from './Navbar.module.scss'
import logo from '../../assets/images/Header/logo.png'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt='logo'/>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>Our Story</li>
                <li className={styles.navItem}>Blog</li>
                <li className={styles.navItem}>Contact</li>
                <li className={styles.navItem}>Pricing</li>
                <li className={styles.logIn}>Log in</li>
                <li className={styles.freeTry}>Try for free</li>
            </ul>
        </nav>
    )
}
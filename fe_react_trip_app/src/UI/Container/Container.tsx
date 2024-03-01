import { LayoutProps } from 'types';
import styles from './Container.module.scss';

export default function Container({children}: LayoutProps) {
    return (
        <div className={styles.parentContainer}>
            {children}
        </div>
    )
}
import styles from "./Container.module.scss";

export default function Container({ children, direction }) {
  const containerStyle = {
    row: styles.row,
    column: styles.column,
    };
    
  return <div className={containerStyle[direction]}>{children}</div>;
}

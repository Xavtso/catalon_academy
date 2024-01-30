import styles from './Button.module.scss';

export default function Button({ text, btnPlace }) {
  const btnClass = {
    form: styles.btnForm,
    hero: styles.btnHero,
    blog: styles.btnBlog,
  };

  return (
    <button className={btnClass[btnPlace]} type="submit">
      {text}
    </button>
  );
}

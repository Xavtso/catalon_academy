import styles from './Header.module.scss';

export default function Header() {
  const links = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/",
      title: "About",
    },
    {
      url: "/",
      title: "Contact Us",
    },
    {
      url: "/",
      title: "Blog",
    },
    {
      url: "/",
      title: "Found a Bag? Let us know",
    },
  ];


  return (
    <nav className={styles.navbar}>
      <a href="/" rel="noopener noreferrer">
        <img
          src="assets/icons/shared/logo.svg"
          alt="logo"
          width="46"
          height="60"
        />
      </a>
      <ul className={styles.linksList}>
        {links.map((item,index) => (
          <li key={index} className={styles.link}>
            <a href={item.url} rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.userActives}>
        <li className={styles.userLink}>
          <a href="/" rel="noopener noreferrer">
            <img
              src="assets/icons/shared/star.svg"
              alt="star"
              width="20"
              height="20"
            />
          </a>
        </li>
        <li className={styles.userLink}>
          <a href="/" rel="noopener noreferrer">
            <img
              src="assets/icons/shared/user.svg"
              alt="user"
              width="32"
              height="32"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

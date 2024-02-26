import styles from "./NavLists.module.scss";

export default function NavLists() {
  const list1 = [ "our story", "awards", "our team", "career"];
  const list2 = [ "our services", "contact", "clients"];

  const list3 = [ "blog", "newsletter", "privacy policy"];
  const list4 = [
    {
      title: "instagram",
      icon: "assets/icons/shared/instagram.svg",
    },
    {
      title: "facebook",
      icon: "assets/icons/shared/facebook.svg",
    },
    {
      title: "twitch",
      icon: "assets/icons/shared/twitch.svg",
    },
  ];

  return (
    <div className={styles.listsContainer}>
          <ul>
              <h6>about</h6>
        {list1.map((item) => (
          <li className={styles.listItem}>
            <a href="/" rel="noopener noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
          <ul>
              <h6>company</h6>
        {list2.map((item) => (
          <li className={styles.listItem}>
            <a href="/" rel="noopener noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
          <ul>
              <h6>resources</h6>
        {list3.map((item) => (
          <li className={styles.listItem}>
            <a href="/" rel="noopener noreferrer">
              {item}
            </a>
          </li>
        ))}
      </ul>
          <ul>
              <h6>Social</h6>
        {list4.map((item) => (
          <li className={styles.listItem}>
            <a href="/" rel="noopener noreferrer">
              <img
                src={item.icon}
                alt="socialIcon"
                width="16.67"
                height="16.67"
              />{" "}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

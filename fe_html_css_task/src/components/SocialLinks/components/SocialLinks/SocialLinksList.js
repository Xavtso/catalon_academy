import styles from "./SocialLinksList.module.scss";

function SocialLinks() {
  const Linkedin = "/assets/icons/Footer/Linkedin.svg";
  const Twitter = "/assets/icons/Footer/Twitter.svg";
  const Facebook = "/assets/icons/Footer/Facebook.svg";

  const links = [
    {
      link: "https://www.linkedin.com/feed/",
      icon: Linkedin,
    },
    {
      link: "https://twitter.com/",
      icon: Twitter,
    },
    {
      link: "https://www.facebook.com/",
      icon: Facebook,
    },
  ];

  return (
    <ul className={styles.socialLinks}>
      {links.map((item, index) => (
        <li key={index} className={styles.socialLink}>
          <a href={item.link} rel="noopener noreferer">
            <img src={item.icon} alt="socialIcon" width="24px" height="24px" />
          </a>
        </li>
      ))}
    </ul>
  );
}
export default SocialLinks;

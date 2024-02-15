import styles from "./HeroSection.module.scss";
import VideoSection from "../../components/VideoSection";

export default function HeroSection() {
  const logo1 = "/assets/images/Header/socialLogo1.png";
  const logo2 = "/assets/images/Header/socialLogo2.png";
  const logo3 = "/assets/images/Header/socialLogo3.png";
  const logo4 = "/assets/images/Header/socialLogo4.png";
  const arrow = "/assets/icons/Button/whiteArrow.svg";

  const icon1 = "/assets/images/backgrounds/heroVector1.png";
  const icon2 = "/assets/images/backgrounds/heroVector2.png";
  const icon3 = "/assets/images/backgrounds/heroVector3.png";

  const imgSources = [
    {
      src: logo1,
      width: '132',
      height:'35',
    },
    {
      src: logo2,
      width: '134',
      height:'34',
    },
    {
      src: logo3,
      width: '134',
      height:'34',
    },
    {
      src: logo4,
      width: '140',
      height:'30',
    },
    ];

  return (
    <section className={styles.section}>
      <div className={styles.mainContent}>
        <div className={styles.contentBlock}>
          <h1 className={styles.title}>Head start your business today!</h1>
          <h3 className={styles.subtitle}>
            Consectetur adipiscing elit. Integer sagittis quam magna, quis
            sollicitudin lorem ornare ut. Nulla et scelerisque mauris.
          </h3>
          <div className={styles.btnContainer}>
            <button className={styles.heroBtn}>Get Started</button>
            <button className={styles.heroBtnSecondary}>
              Try for free{" "}
              <img src={arrow} alt="arrowIcon" width="16" height="16" />
            </button>
          </div>

          <ul className={styles.logoContainer}>
            {imgSources.map((logo, index) => (
              <li key={index} className={styles.logoItem}>
                <img src={logo.src} alt="heroLogos" width={logo.width} height={logo.height} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.iconContainer1}>
          <img
            src={icon1}
            alt="backgroundIcon"
            width='187'
            height='250'
          />
        </div>
        <div className={styles.iconContainer2}>
          <img
            src={icon2}
            alt="backgroundIcon"
            width='170'
            height='240'
          />
        </div>
        <div className={styles.iconContainer3}>
          <img
            src={icon3}
            alt="backgroundIcon"
            width='260'
            height='275'
          />
        </div>
      </div>
      <VideoSection />
    </section>
  );
}

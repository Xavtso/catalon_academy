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

  const imgSources = [logo1, logo2, logo3, logo4];

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
            {imgSources.map((src, index) => (
              <li key={index} className={styles.logoItem}>
                <img src={src} alt="heroLogos" />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.iconContainer1}>
          <img
            src={icon1}
            alt="backgroundIcon"
      
          />
        </div>
        <div className={styles.iconContainer2}>
          <img
            src={icon2}
            alt="backgroundIcon"
       
          />
        </div>
        <div className={styles.iconContainer3}>
          <img
            src={icon3}
            alt="backgroundIcon"
        
          />
        </div>
      </div>
      <VideoSection />
    </section>
  );
}

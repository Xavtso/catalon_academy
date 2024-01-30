import styles from "./HeroSection.module.scss";
import logo1 from "../../images/Header/IMAGEheader1.png";
import logo2 from "../../images/Header/IMAGEheader2.png";
import logo3 from "../../images/Header/IMAGEheader3.png";
import logo4 from "../../images/Header/IMAGEheader4.png";

import icon1 from "../../images/backgrounds/IMAGEvector1.png";
import icon2 from "../../images/backgrounds/IMAGEvector2.png";
import icon3 from "../../images/backgrounds/IMAGEvector3.png";
import WhiteArrow from "../../assets/icons/Button/whiteArrow";
import VideoSection from "../../components/VideoSection";

export default function HeroSection() {
  const imgSources = [logo1, logo2, logo3, logo4];

  return (
    <section className={styles.section}>
      <section className={styles.mainContent}>
        <div className={styles.contentBlock}>
          <h1 className={styles.title}>Head start your business today!</h1>
          <h3 className={styles.subtitle}>
            Consectetur adipiscing elit. Integer sagittis quam magna, quis
            sollicitudin lorem ornare ut. Nulla et scelerisque mauris.
          </h3>
          <div className={styles.btnContainer}>
            <button className={styles.heroBtn}>Get Started</button>
            <button className={styles.heroBtnSecondary}>
              Try for free <WhiteArrow />
            </button>
          </div>

          <ul className={styles.logoContainer}>
            {imgSources.map((src, index) => (
              <li className={styles.logoItem}>
                <img src={src} alt="heroLogos" />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.iconContainer1}>
          <img src={icon1} alt="backgroundIcon" />
        </div>
        <div className={styles.iconContainer2}>
          <img src={icon2} alt="backgroundIcon" />
        </div>
        <div className={styles.iconContainer3}>
          <img src={icon3} alt="backgroundIcon" />
        </div>
      </section>
      <VideoSection />
    </section>
  );
}

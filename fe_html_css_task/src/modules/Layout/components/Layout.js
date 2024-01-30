import BlogSection from "../../BlogSection";
import EfficientSection from "../../EfficientSection";
import PricingSection from "../../PricingSection";
import SpeedSection from "../../SpeedSection";
import StartUpSection from "../../StartUpSection";
import TestimonialSection from "../../TestimonialSection";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import HeroSection from "../../HeroSection";

import styles from "./Layout.module.scss";
import FeedbackSection from "../../FeedbackSection";

export default function Layout() {
  const childrens = [
    <HeroSection key={"hero"} />,
    <SpeedSection key={"speed"} />,
    <StartUpSection key={"up"} />,
    <EfficientSection key={"efficient"} />,
    <TestimonialSection key={"testimonial"} />,
    <PricingSection key={"pricing"} />,
    <BlogSection key={"blog"} />,
    <FeedbackSection key={"feedback"} />,
  ];

  return (
    <>
      <Header />
      <main className={styles.pageContent}>{childrens}</main>
      <Footer />
    </>
  );
}

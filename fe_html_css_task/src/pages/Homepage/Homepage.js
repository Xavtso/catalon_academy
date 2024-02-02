import Layout from "../../modules/Layout/components/Layout";
import HeroSection from "../../modules/HeroSection";
import SpeedSection from "../../modules/SpeedSection";
import StartUpSection from "../../modules/StartUpSection";
import EfficientSection from "../../modules/EfficientSection";
import TestimonialSection from "../../modules/TestimonialSection";
import PricingSection from "../../modules/PricingSection";
import BlogSection from "../../modules/BlogSection";
import FeedbackSection from "../../modules/FeedbackSection";

export default function Homepage() {
  return (
    <Layout>
      <HeroSection />
      <SpeedSection />
      <StartUpSection />
      <EfficientSection />
      <TestimonialSection />
      <PricingSection />
      <BlogSection />
      <FeedbackSection />
    </Layout>
  );
}

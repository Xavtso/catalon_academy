import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Message from "../../UI/Message";
import { useState } from "react";
import SpeedSection from "../../modules/SpeedSection";
import StartUpSection from "../../modules/StartUpSection";
import EfficientSection from "../../modules/EfficientSection";
import PricingSection from "../../modules/PricingSection";
import BlogSection from "../../modules/BlogSection";
import ContactSection from "../../modules/ContactSection";
import Footer from "../../components/Footer";
import TestimonialSection from "../../modules/TestimonialSection";

export default function Homepage() {
  const [showMessage, setShowMessage] = useState(true);

  function handleMessage() {
    setShowMessage(!showMessage);
  }

  return (
    <>
      {showMessage ? <Message onClose={handleMessage} /> : null}
      <Navbar />
      <Header />
      <HeroSection />
      <SpeedSection />
      <StartUpSection />
      <EfficientSection />
      <TestimonialSection />
      <PricingSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </>
  );
}

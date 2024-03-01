import HotTripsSection from "@modules/HotTripsSection";
import QuoteSection from "@modules/QuoteSection";
import TripsSection from "@modules/TripsSection";

export default function Homepage() {
  return (
    <>
        <HotTripsSection />
        <TripsSection />
        <QuoteSection/>
    </>
  );
}

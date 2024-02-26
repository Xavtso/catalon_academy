import Layout from "../../components/Layout";
import HotTripsSection from "../../modules/HotTripsSection";
import QuoteSection from "../../modules/QuoteSection";
import TripsSection from "../../modules/TripsSection/TripsSection";

export default function Homepage() {
  return (
    <>
      <Layout>
        <HotTripsSection />
        <TripsSection />
        <QuoteSection/>
      </Layout>
    </>
  );
}

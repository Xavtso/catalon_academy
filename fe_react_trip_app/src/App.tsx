import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./styles/globals.scss";
import Layout from "./components/Layout";
import TripDetailsSection from "./modules/TripDetailsSection";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detailed/*" element={<TripDetailsSection />} />
      </Routes>
    </Layout>
  );
}

export default App;

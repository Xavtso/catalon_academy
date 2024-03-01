import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./styles/globals.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { viewSliceActions } from "@slices/viewSlice";
import Layout from "./components/Layout";
import TripDetailsSection from "./modules/TripDetailsSection";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewSliceActions.handleResize(window.outerWidth));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(viewSliceActions.handleResize(window.outerWidth));
    });

    return () => {
      window.addEventListener("resize", () => {
        dispatch(viewSliceActions.handleResize(window.outerWidth));
      });
    };
  }, [dispatch]);

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

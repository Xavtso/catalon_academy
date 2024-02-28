import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./styles/globals.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { viewSliceActions } from "./store/slices/viewSlice";

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
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;

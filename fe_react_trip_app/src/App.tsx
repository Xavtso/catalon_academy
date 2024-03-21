import { RouterProvider } from "react-router-dom";
// import Homepage from "./pages/Homepage";
import "./styles/globals.scss";
// import Layout from "./components/Layout";
// import TripDetailsSection from "./pages/TripDetailsPage";
import { router } from "contstants/Router";

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

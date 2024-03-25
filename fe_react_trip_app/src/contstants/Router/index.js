import { createBrowserRouter } from "react-router-dom";
import Layout from "components/Layout";
import { pathConstants } from "./pathConstants";
import Homepage from "pages/Homepage";
import TripDetailsPage from "pages/TripDetailsPage";
import Page404 from "pages/404/Page404";
import AuthPage from "pages/AuthPage/AuthPage";
// import NotFound from "components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      { path: pathConstants.HOME, element: <Homepage /> },
      { path: pathConstants.DETAILED, element: <TripDetailsPage /> },
      { path: pathConstants.AUTH, element: <AuthPage /> },
      // { path: pathConstants.NOT_FOUND, element: <NotFound /> },
    ],
  },
]);

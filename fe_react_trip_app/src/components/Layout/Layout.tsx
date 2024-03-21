// import { LayoutProps } from "types";
import Footer from "components/Footer";
import Header from "components/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

import { LayoutProps } from "types";
import Footer from "components/Footer";
import Header from "components/Header";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

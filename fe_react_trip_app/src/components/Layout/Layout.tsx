import { LayoutProps } from "../../types";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Header from "src/components/layout/header/Header.jsx";
import Footer from "src/components/layout/footer/Footer.jsx";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="h-full flex flex-col mx-auto relative overflow-hidden">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

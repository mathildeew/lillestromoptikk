import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />

      <main className=" h-full flex flex-col mx-auto relative overflow-hidden">
        <Outlet />

        {/* <img
          src="src/assets/oo-blue.png"
          className="ooBlue w-3/4 absolute -rotate-45  "
        /> */}
      </main>
      <Footer />
    </>
  );
}

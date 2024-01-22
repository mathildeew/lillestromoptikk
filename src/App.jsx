import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import PageNotFound from "./pages/404";
import Home from "./pages/Home";
import Eyecheck from "./pages/Eyecheck";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route exact path="timebestilling" element={<Eyecheck />}></Route>
        <Route path="merker" element={<Brands />}></Route>
        <Route path="kontakt-oss" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
}

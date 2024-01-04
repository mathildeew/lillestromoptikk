import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./pages/404";
import Home from "./pages/Home";
import Eyecheck from "./pages/Eyecheck";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route exact path="/timebestilling" element={<Eyecheck />}></Route>
        <Route path="/merker" element={<Brands />}></Route>
        <Route path="/kontakt-oss" element={<Contact />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Eyecheck from "./pages/Eyecheck";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route exact path="/synstest" element={<Eyecheck />}></Route>
        <Route path="/om-oss" element={<About />}></Route>
        <Route path="/kontakt-oss" element={<Contact />}></Route>
        <Route path="/merker" element={<Brands />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
}

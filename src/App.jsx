import { Routes, Route } from "react-router-dom";
import { Booking } from "./components/Booking";
import Layout from "./components/Layout";
import PageNotFound from "./pages/404";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/booking" element={<Booking />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  );
}

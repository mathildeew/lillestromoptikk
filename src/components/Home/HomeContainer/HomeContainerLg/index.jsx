import { useState } from "react";

import Hero from "../../Hero";
import EyecheckInfo from "../../EyecheckInfo";
import OurBrands from "../../OurBrands";
import ContactUsAnimation from "../../ContactUsAnimation";
import OrderLensesInfo from "../../OrderLensesInfo";
import HomeNavLg from "../../../Layout/Nav/HomeNavLg";

export default function HomeContainerLg() {
  const [hoverBg, setHoverBg] = useState("main");

  return (
    <div className="w-full h-screen relative top-0 z-20 hidden lg:flex">
      <HomeNavLg hoverBg={hoverBg} setHoverBg={setHoverBg} />

      <div className="w-1/2 h-full">
        {hoverBg === "main" && <Hero />}
        {hoverBg === "eyecheck" && <EyecheckInfo />}
        {hoverBg === "brands" && <OurBrands />}
        {hoverBg == "contact" && <ContactUsAnimation />}
        {hoverBg === "lenses" && <OrderLensesInfo />}
      </div>
    </div>
  );
}

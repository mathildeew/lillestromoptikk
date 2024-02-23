import Hero from "../../Hero";
import EyecheckInfo from "../../EyecheckInfo";

import OurBrands from "../../OurBrands";

export default function HomeContainerSm() {
  return (
    <div className="flex flex-col lg:hidden">
      <Hero />
      <EyecheckInfo />
      <OurBrands />
    </div>
  );
}

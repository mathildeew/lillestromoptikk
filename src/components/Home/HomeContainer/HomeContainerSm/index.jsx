import OurBrands from "../../OurBrands";
import EyecheckInfo from "../../EyecheckInfo";
import Instagram from "../../Instagram";
import Hero from "../../Hero";

export default function HomeContainerSm() {
  return (
    <>
      <div className="flex flex-col lg:hidden">
        <Hero />
        <EyecheckInfo />
        <OurBrands />
        {/* <BrandsAnimation /> */}
      </div>
    </>
  );
}

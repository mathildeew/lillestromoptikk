import BrandsAnimation from "../BrandsAnimation";
import Hero from "../Hero";
import HomeLogMar from "../HomeLogMar";
import Instagram from "../Instagram";

export default function HomeContainerSM() {
  return (
    <>
      <div className="flex flex-col lg:hidden">
        <Hero />
        <HomeLogMar />
        <BrandsAnimation />
        {/* <BrandsAnimation /> */}
      </div>
    </>
  );
}

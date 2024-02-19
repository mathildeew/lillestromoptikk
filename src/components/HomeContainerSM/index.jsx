import BrandsAnimation from "../BrandsAnimation";
import Hero from "../Hero";
import HomeLogMar from "../HomeLogMar";

export default function HomeContainerSM() {
  return (
    <>
      <div className="flex flex-col gap-12 lg:hidden">
        {/* <Hero /> */}
        <HomeLogMar />
        <BrandsAnimation />
        {/* <BrandsAnimation /> */}
      </div>
    </>
  );
}

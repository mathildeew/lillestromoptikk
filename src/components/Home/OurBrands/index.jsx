import { useEffect } from "react";
import { gsap } from "gsap";
import { brands } from "../../../pages/Brands/brands";

export default function OurBrands() {
  const moscot = gsap.timeline({
    repeat: -1,
  });

  const orgreen = gsap.timeline({
    repeat: -1,
  });

  const masunaga = gsap.timeline({
    repeat: -1,
  });

  const resrei = gsap.timeline({
    repeat: -1,
  });

  useEffect(() => {
    moscot
      .to("#moscot", { translateX: "7px", translateY: "-7px", duration: 1 })
      .to("#moscot", { translateX: "-7px", translateY: "14px", duration: 1 })
      .to("#moscot", { translateX: "14px", translateY: "-7px", duration: 1 })
      .to("#moscot", { translateX: "0px", translateY: "0px", duration: 1 });

    orgreen
      .to("#orgreen", { translateX: "-14px", translateY: "-9px", duration: 1 })
      .to("#orgreen", { translateX: "7px", translateY: "10px", duration: 1 })
      .to("#orgreen", { translateX: "10px", translateY: "8px", duration: 1 })
      .to("#orgreen", { translateX: "0px", translateY: "0px", duration: 1 });

    masunaga
      .to("#masunaga", { translateX: "10px", translateY: "9px", duration: 1 })
      .to("#masunaga", { translateX: "-10px", translateY: "5px", duration: 1 })
      .to("#masunaga", { translateX: "-8px", translateY: "-7px", duration: 1 })
      .to("#masunaga", { translateX: "0px", translateY: "0px", duration: 1 });

    resrei
      .to("#resrei", { translateX: "7px", translateY: "-12px", duration: 1 })
      .to("#resrei", { translateX: "10px", translateY: "-7px", duration: 1 })
      .to("#resrei", { translateX: "-8px", translateY: "5px", duration: 1 })
      .to("#resrei", { translateX: "0px", translateY: "0px", duration: 1 });
  });

  return (
    <section className="bg-kleinBlue w-full flex flex-col items-center gap-16 py-20 lg:h-full lg:py-0">
      <h2 className="text-white lg:hidden">Våre merker</h2>

      <div className="flex flex-col gap-10 lg:gap-0 lg:h-full lg:justify-around">
        {brands.map((brand) => (
          <div
            key={brand.id}
            id={brand.id}
            className="bg-white w-fit px-4 py-2 border-2 border-black rounded-full md:border-4"
          >
            <p className="text-2xl md:text-4xl lg:text-6xl uppercase">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

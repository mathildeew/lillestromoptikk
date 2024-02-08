import { brands } from "../../pages/Brands/brands";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function BrandsAnimation() {
  const moscot = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
  });

  const orgreen = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
  });

  const masunaga = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
  });

  const resrei = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
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
    <div className="bg-kleinBlue w-full h-full flex flex-col items-center justify-around">
      <div
        id="moscot"
        className="bg-white w-fit border-4 border-black rounded-full px-4 py-2"
      >
        <p className="text-6xl uppercase">moscot</p>
      </div>

      <div
        id="orgreen"
        className="bg-white w-fit border-4 border-black rounded-full px-4 py-2"
      >
        <p className="text-6xl uppercase">ørgreen</p>
      </div>

      <div
        id="masunaga"
        className="bg-white w-fit border-4 border-black rounded-full px-4 py-2"
      >
        <p className="text-6xl uppercase">masunaga</p>
      </div>

      <div
        id="resrei"
        className="bg-white w-fit border-4 border-black rounded-full px-4 py-2"
      >
        <p className="text-6xl uppercase">resrei</p>
      </div>
    </div>
  );
}

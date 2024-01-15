import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function BrandSlider() {
  const brands = [
    {
      name: "Moscot",
      img: "/dist/brands/moscot/COLLECTION_5.jpeg",
    },
    {
      name: "Ørgreen",
      img: "/dist/brands/orgreen/orgreen-optics-collection.jpg",
    },
    {
      name: "Res Rei",
      img: "/public/brands/resrei/resrei_SS2023_details_mod_Rodin-724_Dafne-854.jpg",
    },
    {
      name: "Masunaga",
      img: "/public/brands/masunaga/masunaga_GMS123_124_1.jpg",
    },
  ];

  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);

  const handleNext = () => {
    if (counter !== brands.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section>
      <h2>Våre merker</h2>
      <div
        className="w-full h-96 md:h-[500px] lg:h-[650px]"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {brands.map((brand, index) => (
          <div
            className={`bg-cover bg-no-repeat bg-center h-full w-full ${
              counter - 1 === index ? "show" : "not-show"
            }`}
            style={{ backgroundImage: `url(${brand.img})` }}
          >
            <span className="text-kleinBlue text-6xl md:text-9xl font-bold bg-white bg-opacity-60 rounded-full py-4 px-8 uppercase">
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

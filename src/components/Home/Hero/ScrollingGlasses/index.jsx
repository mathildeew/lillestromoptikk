import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ScrollingGlasses() {
  const fillColor = "#1F1BBD";
  const strokeColor = "#ffffff";
  const strokeWidth = 10;
  const strokeOpacity = "20%";

  const stopScroll = 700;
  useEffect(() => {
    const handleScroll = () => {
      const scrollBrille = document.querySelector(".scrollBrille");
      if (scrollBrille) {
        const scrollOffset = window.scrollY;

        if (scrollOffset < stopScroll) {
          const x = scrollOffset * 0.4;
          const y = scrollOffset;

          scrollBrille.style.transform = `translate(${x}px, ${y}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [stopScroll]);

  return (
    <section className="text-black bg-white w-full relative lg:hidden">
      <div className="max-w-3xl mx-auto px-4 py-32 md:px-12">
        <h1 className="text-7xl tracking-wide mb-0 py-8 relative z-30 sm:text-8xl md:text-9xl">
          Velkommen {<br />} til {<br />} Lillestrøm Optikk
        </h1>

        <div className="w-[350px] h-fit scrollBrille absolute top-72 -right-10 z-10 sm:w-[450px] md:w-[550px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="956.02"
            height="983.083"
            viewBox="0 0 956.02 983.083"
            className="w-full h-full"
          >
            <path
              d="M-14312.951-737.4q-54.092-3.337-97.58-24.648-43.516-21.332-73.734-56.558t-45.37-81.947q-15.138-46.718-11.842-100.8,3.252-53.454,23.94-97.607a237.608,237.608,0,0,1,35.816-55.21l-54.98-56.934,0,0-54.019-55.938a218.534,218.534,0,0,1-76.836,45.3q-45.747,15.81-101.077,12.471-54.035-3.281-97.467-24.531-43.455-21.27-73.614-56.43-30.168-35.177-45.253-81.827t-11.737-100.69q3.309-53.4,24.012-97.535a238.235,238.235,0,0,1,35.84-55.187l-54.875-56.825,31.408-30.336,55.315,57.28a231.876,231.876,0,0,1,67.286-36.78q45.724-15.844,99.768-12.55,55.329,3.36,98.781,24.614,43.431,21.264,72.649,56.049,29.215,34.765,43.334,81.048,14.127,46.243,10.822,99.651-3.354,54.036-23.1,98.57a241.184,241.184,0,0,1-26.153,44.983l57.193,59.226,0,0,54.558,56.491a231.465,231.465,0,0,1,67.308-36.75q45.759-15.821,99.851-12.471,55.378,3.422,98.89,24.735,43.494,21.326,72.774,56.174,29.276,34.827,43.45,81.168,14.178,46.3,10.924,99.756-3.3,54.086-23.025,98.649a241.279,241.279,0,0,1-26.135,45l57.3,59.336-31.413,30.332-54.983-56.938a218.285,218.285,0,0,1-76.862,45.269q-37.655,12.982-81.81,12.994Q-14303.121-736.789-14312.951-737.4Zm-43.989-399.393a158.415,158.415,0,0,0-55.744,29.241,149.793,149.793,0,0,0-38.576,48q-14.477,28.2-16.626,63.378-2.152,35.2,8.778,65.294a148.77,148.77,0,0,0,32.436,52.7,159.224,159.224,0,0,0,51.773,35.9q30.248,13.28,67.4,15.6,35.832,2.213,67.169-7.3a162.194,162.194,0,0,0,55.391-28.973,149.115,149.115,0,0,0,38.892-47.953q14.833-28.508,17.007-64.365,2.186-35.837-9.075-65.633a150.359,150.359,0,0,0-32.8-52.059,162.384,162.384,0,0,0-51.461-35.538q-29.949-13.308-65.776-15.5-7.239-.447-14.268-.447A188.52,188.52,0,0,0-14356.94-1136.788Zm-455.262-471.44a158.672,158.672,0,0,0-55.722,29.267,150.084,150.084,0,0,0-38.587,47.986q-14.489,28.2-16.672,63.333-2.18,35.171,8.71,65.223a148.225,148.225,0,0,0,32.357,52.617,158.7,158.7,0,0,0,51.69,35.82q30.208,13.241,67.32,15.524,35.8,2.174,67.112-7.355a162.486,162.486,0,0,0,55.372-29,149.474,149.474,0,0,0,38.9-47.941q14.845-28.5,17.048-64.32,2.219-35.8-9-65.562a149.935,149.935,0,0,0-32.719-51.977,161.877,161.877,0,0,0-51.382-35.455q-29.9-13.263-65.7-15.422-7.128-.434-14.051-.434A188.647,188.647,0,0,0-14812.2-1608.229Z"
              transform="translate(15000.31 1716.872)"
              fill={fillColor}
              strokeOpacity={strokeOpacity}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
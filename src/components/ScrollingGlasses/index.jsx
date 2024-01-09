import { useEffect } from "react";
import { useState } from "react";

export default function ScrollingGlasses() {
  const stopScroll = 700;

  useEffect(() => {
    const handleScroll = () => {
      const scrollBrille = document.querySelector(".scrollBrille");
      if (scrollBrille) {
        const scrollOffset = window.scrollY;

        if (scrollOffset < stopScroll) {
          const x = scrollOffset * 0.4; // Juster faktoren etter ønsket skrå bevegelse
          const y = scrollOffset; // Juster faktoren etter ønsket skrå bevegelse

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
    <div className="scrollBrille w-550 absolute top-40 -right-28 z-10 md:w-750 lg:w-950 xl:w-1100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1272.328"
        height="1292.354"
        viewBox="0 0 1272.328 1292.354"
        className="w-full h-full"
      >
        <path
          id="logoelement_-_brille"
          data-name="logoelement - brille"
          d="M-5697.547-12955.166q-46.251-2.745-90.294-24.295-44.054-21.571-80.6-61.5-36.125-39.483-53.471-85.033a238.568,238.568,0,0,1-14.815-64.1h-79v-43.691h79.622a231.866,231.866,0,0,1,20.3-73.922q20.373-43.919,60.28-80.508,40.83-37.474,86.318-53.947a222.391,222.391,0,0,1,76.219-13.842c4.851,0,9.725.172,14.571.51q45.308,3.144,88.395,25.141,43.084,21.932,79.208,61.436,36.546,39.935,54.855,85.084a241.749,241.749,0,0,1,14.191,50.049h82.325v43.691h-79a218.749,218.749,0,0,1-20.789,86.721q-20.4,43.919-61.254,81.381-39.886,36.589-85.346,53.066a229.431,229.431,0,0,1-78.636,14.135C-5688.812-12954.789-5693.191-12954.92-5697.547-12955.166Zm-40.916-403.66q-30.328,12.319-56.738,36.553-27.393,25.125-42.514,54.484a158.417,158.417,0,0,0-17.673,60.4,150.132,150.132,0,0,0,7.725,61.1q10.213,30.015,33.973,55.986,23.793,26,52.976,39.037A147.8,147.8,0,0,0-5700.4-13038a158.4,158.4,0,0,0,61.687-12.275q30.5-12.551,57.921-37.654,26.445-24.243,41.334-53.4a162.126,162.126,0,0,0,17.591-59.967,149.372,149.372,0,0,0-7.454-61.287q-10.187-30.48-34.429-56.937-24.195-26.476-53.409-39.074a150.1,150.1,0,0,0-59.92-12.574h-.19A162.085,162.085,0,0,0-5738.463-13358.826Zm-615.368,403.66q-46.251-2.745-90.294-24.295-44.054-21.571-80.595-61.5-36.125-39.483-53.471-85.033a238.457,238.457,0,0,1-14.815-64.1h-79v-43.691h79.623a231.868,231.868,0,0,1,20.3-73.922q20.37-43.919,60.28-80.508,40.83-37.474,86.318-53.947a222.387,222.387,0,0,1,76.219-13.842c4.853,0,9.723.172,14.569.51q45.309,3.144,88.4,25.141,43.084,21.932,79.208,61.436,36.546,39.935,54.855,85.084a241.681,241.681,0,0,1,14.189,50.049h82.328v43.691h-79a218.769,218.769,0,0,1-20.792,86.721q-20.4,43.919-61.251,81.381-39.889,36.589-85.347,53.066a229.435,229.435,0,0,1-78.636,14.135C-6345.1-12954.789-6349.476-12954.92-6353.831-12955.166Zm-40.915-403.66q-30.331,12.319-56.739,36.553-27.393,25.125-42.514,54.484a158.417,158.417,0,0,0-17.673,60.4,150.215,150.215,0,0,0,7.724,61.1q10.216,30.015,33.975,55.986,23.793,26,52.973,39.037a147.813,147.813,0,0,0,60.318,13.27,158.409,158.409,0,0,0,61.688-12.275q30.5-12.551,57.922-37.654,26.443-24.243,41.333-53.4a162.126,162.126,0,0,0,17.591-59.967,149.356,149.356,0,0,0-7.455-61.287q-10.187-30.48-34.428-56.937-24.195-26.476-53.408-39.074a150.112,150.112,0,0,0-59.926-12.574h-.187A162.086,162.086,0,0,0-6394.746-13358.826Z"
          transform="matrix(0.695, 0.719, -0.719, 0.695, -4684.133, 14146.762)"
          fill="#90abe8"
        />
      </svg>
    </div>
  );
}

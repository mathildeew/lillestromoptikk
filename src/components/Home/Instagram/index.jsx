import { useEffect } from "react";
import { useCallback } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import useAPI from "../../../hooks/useAPI";

export default function Instagram() {
  const { fetchAPI, data: instagramFeed, isLoading, isError } = useAPI();

  const getFeed = useCallback(async () => {
    await fetchAPI(`https://feeds.behold.so/b3mmEs0psh3iCG2HZOu6`);
  }, []);

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 5,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    md: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    sm: {
      breakpoint: { max: 768, min: 440 },
      items: 2,
    },
    xs: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    return (
      <button
        onClick={() => onClick()}
        className="text-white w-9 h-9 bg-black bg-opacity-30  rounded-full flex items-center justify-center absolute right-6 sm:right-2 md:right-5"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    return (
      <button
        onClick={() => onClick()}
        className="text-white w-9 h-9 bg-black bg-opacity-30  rounded-full flex items-center justify-center absolute left-6 sm:left-2 md:left-6"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
      </button>
    );
  };

  return (
    <section className="bg-grey py-8 relative">
      <Carousel
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        className="max-w-screen-2xl mx-auto"
      >
        {instagramFeed.map((post) => (
          <div key={post.id} className="mx-1">
            <img
              src={post.mediaUrl}
              className="w-full h-96 object-cover mx-auto sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-full"
            />
          </div>
        ))}
      </Carousel>

      <div className="text-white w-fit bg-kleinBlue py-4 px-8 mx-auto  -translate-y-8">
        <a
          href="https://www.instagram.com/lillestromoptikk/"
          className="flex flex-col items-center"
        >
          <span className="text-xl uppercase font-bold tracking-wide ">
            @lillestromoptikk
          </span>
          <p>Følg oss på Instagram</p>
        </a>
      </div>
    </section>
  );
}

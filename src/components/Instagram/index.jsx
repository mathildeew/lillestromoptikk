import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useAPI from "../../hooks/useAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Instagram() {
  const { fetchAPI, instagramFeed, isLoading, isError } = useAPI();

  const getFeed = useCallback(async () => {
    await fetchAPI(`https://feeds.behold.so/b3mmEs0psh3iCG2HZOu6`);
  }, []);

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return (
      <button
        onClick={() => onClick()}
        className="h-9 w-9 text-white bg-black bg-opacity-30   rounded-full flex items-center justify-center absolute right-6"
      >
        <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        onClick={() => onClick()}
        className="h-9 w-9 text-white bg-black bg-opacity-30   rounded-full flex items-center justify-center absolute left-6"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
      </button>
    );
  };

  return (
    <div className="bg-grey pt-8 relative border-2 border-red-500">
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
              className="w-full h-96 object-cover border-2 mx-auto border-black sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-60 lg:h-60"
            />
          </div>
        ))}
      </Carousel>
      <div className="text-white max-w-xs mx-auto py-4 bg-kleinBlue  -translate-y-10">
        <a
          href="https://www.instagram.com/lillestromoptikk/"
          className="flex flex-col items-center"
        >
          <span className="text-xl uppercase font-bold tracking-wide">
            Følg oss på Instagram
          </span>
          <p>@lillestromoptikk</p>
        </a>
      </div>
    </div>
  );
}

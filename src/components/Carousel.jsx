import { useEffect } from "react";
import { useCallback } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { urlFor } from "../sanity/urlFor";
import { useState } from "react";

export default function ImageCarousel(data) {
  const { data: carouselImages } = data;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    return (
      <button onClick={() => onClick()} className="text-white w-9 h-9 bg-green361 bg-opacity-50 rounded-full flex items-center justify-center absolute right-2 sm:right-2 md:right-4">
        <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    return (
      <button onClick={() => onClick()} className="text-white w-9 h-9 bg-green361 bg-opacity-50 rounded-full flex items-center justify-center absolute left-2 sm:left-2 md:left-4">
        <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
      </button>
    );
  };

  return (
    <div className="w-full border-2">
      <Carousel responsive={responsive} customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />}>
        {carouselImages.map((image) => (
          <img key={image._key} src={urlFor(image.image).url()} alt={image.altText} className="w-full h-full" />
        ))}
      </Carousel>
    </div>
  );
}

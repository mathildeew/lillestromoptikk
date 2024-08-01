import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanityClient";

/**
 * Generates a URL for a given image value using the Sanity image URL builder.
 *
 * @param {Object} source - The image value object for which the URL is to be generated.
 * @returns {string|null} The URL for the image if the value is provided, otherwise null.
 *
 * @example
 * const imageUrl = urlFor(imageAsset);
 * if (imageUrl) {
 *   console.log(imageUrl); // Outputs the URL for the given image asset
 * }
 */
export function urlFor(source) {
  const builder = imageUrlBuilder(sanityClient);

  if (!source) {
    return null;
  }
  return builder.image(source);
}

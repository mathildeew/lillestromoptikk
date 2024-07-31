export const apiQuieries = (query, slug) => ({
  openingHours: `
  *[_type == "openingHours"][0]{
    content
  }
  `,

  metadata: `
  *[_type == "${query}"][0]{
    title,
    desc
   }
  `,

  ourBrands: `
  *[_type == "ourBrands"]{
    _id,
    title,
    "imageUrl": image.asset -> url,
    "imageAlt": image.alt,
    image,
    content
   }
  `,
});

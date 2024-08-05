export const apiQuieries = (query) => ({
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

  hero: `
  *[_type == "hero"][0]{
    title, 
    images
   }
  `,

  temporary: `
  *[_type == "temporary"][0]{
    title,
    text, 
    image
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

  about: `
  *[_type == "about"][0]{
    intro,
    sections,
    carousel,
   }
  `,
});

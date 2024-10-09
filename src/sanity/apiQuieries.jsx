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
    "imageUrl": image.asset -> url,
    "imageAlt": image.alt,
    content
   }
  `,

  temporary: `
  *[_type == "temporary"][0]{
    title,
    text, 
    image,
    published
   }
  `,

  content: `
  *[_type == "content"][0]{
   }
  `,

  ourBrands: `
  *[_type == "ourBrands"]{
    _id,
    title,
    "imageUrl": image.asset -> url,
    "imageAlt": image.alt,
    image,
    content,
    inFocus,
    "focusUrl": focusImage.asset -> url,
    "focusAlt": focusImage.alt
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

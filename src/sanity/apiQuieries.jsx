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

  eyecheckMetadata: `
  *[_type == "eyecheckMetadata"][0]{
    title,
    desc
  }
  `,

  aboutMetadata: `
  *[_type == "aboutMetadata"][0]{
    title,
    desc
  }
  `,

  brandsMetadata: `
  *[_type == "brandsMetadata"][0]{
    title,
    desc
  }
  `,

  recyclingMetadata: `
  *[_type == "homeMetadata"][0]{
    title,
    desc
  }
  `,
});

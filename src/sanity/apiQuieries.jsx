export const apiQuieries = (slug) => ({
  openingHours: `
    *[_type == "openingHours"][0]{
      content
    }
  `,
});

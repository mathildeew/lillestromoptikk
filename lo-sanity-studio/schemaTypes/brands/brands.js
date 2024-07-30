
const ourBrands = {
  name: 'ourBrands',
  title: 'Merker',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Merke',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
}

export default ourBrands

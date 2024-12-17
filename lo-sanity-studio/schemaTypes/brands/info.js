const brandsInfo = {
  name: 'brandsInfo',
  title: 'Innhold',
  type: 'document',
  fields: [
    {
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
      description: 'Kort tekst som vises øverst på siden.',
      validation: (rule) => rule.required(),
    },
  ],
}

export default brandsInfo

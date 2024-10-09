const content = {
  name: 'content',
  title: 'Innhold',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Innhold',
      type: 'string',
      initialValue: 'Innhold',
      readOnly: true,
    },
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

export default content

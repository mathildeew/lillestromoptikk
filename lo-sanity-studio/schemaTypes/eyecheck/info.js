const eyecheckInfo = {
  name: 'eyecheckInfo',
  title: 'Innhold',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      initialValue: 'Bestill time',
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

export default eyecheckInfo

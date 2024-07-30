const recyclingMetadata = {
  name: 'recyclingMetadata',
  title: 'Meta data',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'desc',
      title: 'Beskrivelse',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    },
  ],
}

export default recyclingMetadata

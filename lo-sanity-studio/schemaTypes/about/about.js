const about = {
  name: 'about',
  title: 'Om oss',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      initialValue: 'Om oss',
      readOnly: true,
    },
    {
      name: 'intro',
      title: 'intro',
      type: 'text',
      rows: 4,
      //   validation: (rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Innhold',
      type: 'array',
      //   validation: (rule) => rule.required(),
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}

export default about

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

const section = {
  name: 'section',
  title: 'Avsnitt',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Overskrift',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'text',
      title: 'Tekst',
      type: 'text',
      rows: 8,
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternativ tekst',
          description: 'Enkel beskrivelse av bildet, 5-10 ord.',
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],
    },
  ],
}

export default section

const hero = {
  name: 'hero',
  title: 'Innhold',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      initialValue: 'Innhold',
      readOnly: true,
    },
    {
      name: 'image',
      title: 'Bilde',
      type: 'image',
      description: 'Bør være under 200KB.',
      validation: (rule) => rule.required(),
      options: {hotspot: true},
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

export default hero

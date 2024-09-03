const temporary = {
  name: 'temporary',
  title: 'Midlertidig',
  type: 'document',
  fields: [
    {
      title: 'Skal dette publiseres?',
      name: 'published',
      description: 'Publiseres dette vises det på forsiden øverst.',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Det er mulig å kun laste opp bilde.',
    },
    {
      name: 'text',
      title: 'Tekst',
      type: 'text',
      description: 'Innholdet til seksjonen.',
      description: 'Det er mulig å kun laste opp bilde.',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Bakgrunnsbilde',
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

export default temporary

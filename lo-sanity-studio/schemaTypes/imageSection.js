const imageSection = {
  name: 'imageSection',
  title: 'Bilder',
  type: 'object',
  fields: [
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

export default imageSection

const ourBrands = {
  name: 'ourBrands',
  title: 'Merker',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Merke',
      type: 'string',
      description: 'Navnet på merket.',
      validation: (rule) => rule.required(),
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
    {
      name: 'content',
      title: 'Innhold',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            {
              title: 'Normal',
              value: 'normal',
            },
          ],
        },
      ],
    },
  ],
}

export default ourBrands

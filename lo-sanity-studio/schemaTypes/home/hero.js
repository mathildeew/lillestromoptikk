const hero = {
  name: 'hero',
  title: 'Innhold',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
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
          type: 'string',
          description: 'Enkel beskrivelse av bildet, 5-10 ord.',
          validation: (rule) => rule.required(),
        },
      ],
    },
    {
      name: 'content',
      title: 'Tekst',
      type: 'array',
      description: "Vises ved siden av bildet på forsiden.",
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            {
              value: 'normal',
            },
          ],
        },
      ],
    },
    // {
    //   name: 'images',
    //   title: 'Bilder til karusell',
    //   type: 'array',
    //   of: [{type: 'imageSection'}],
    // },
  ],
}

export default hero

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
      name: 'images',
      title: 'Bilder til karusell',
      type: 'array',
      of: [{type: 'imageSection'}],
    },
  ],
}

export default hero

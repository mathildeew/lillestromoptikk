import carouselImage from '../carouselImage'

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
      title: 'Intro',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    },
    {
      name: 'carousel',
      title: 'Bildekarusell',
      type: 'array',
      of: [{type: 'carouselImage'}],
      options: {
        layout: 'grid',
      },
    },
  ],
}

export default about

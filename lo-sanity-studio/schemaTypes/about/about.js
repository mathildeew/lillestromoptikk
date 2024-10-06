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
      description: 'Kort tekst som vises øverst på siden.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'sections',
      title: 'Avsnitt',
      description: 'Trykk på "Add item" for å legge til et nytt avsnitt med tekst og bilde.',
      type: 'array',
      of: [{type: 'section'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'carousel',
      title: 'Bildekarusell',
      description: 'Legg til bilder for å opprette en bildekarusell nederst på siden.',
      type: 'array',
      of: [{type: 'carouselImage'}],
      options: {
        layout: 'grid',
      },
    },
  ],
}

export default about

const carouselImage = {
  name: 'carouselImage',
  title: 'Carousel Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altText',
      title: 'Alternative Text',
      type: 'string',
      description: 'Kort beskrivelse av bildet.',
      validation: (rule) => rule.required(),

    },
  ],
}

export default carouselImage

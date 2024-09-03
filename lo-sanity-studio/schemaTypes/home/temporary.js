const temporary = {
  name: 'temporary',
  title: 'Midlertidig',
  type: 'document',
  fields: [
    {
      title: 'Skal dette publiseres?',
      name: 'published',
      description: 'Brukes om noe skal vises midlertidig, feks. salg, endrede åpningstider osv. ',
      type: 'boolean',
    },
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description: 'Ikke nødvendig. Det er mulig å kun laste opp bilde.',
    },
    {
      name: 'text',
      title: 'Tekst',
      type: 'text',
      description: 'Innholdet til seksjonen.',
      description: 'Ikke nødvendig. Det er mulig å kun laste opp bilde.',
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

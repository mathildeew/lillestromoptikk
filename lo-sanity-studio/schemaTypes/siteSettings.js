const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Butikk',
      type: 'string',
      initialValue: 'Lillestrøm Optikk',
      readOnly: true,
    },
    {
      name: 'address',
      title: 'Adresse',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        {name: 'street', title: 'Gatenavn og nummer', type: 'string'},
        {name: 'city', title: 'Postnummer og sted', type: 'string'},
      ],
    },
    {
      name: 'phone',
      title: 'Telefonnummer',
      description: 'Format: 98 76 54 32',
      type: 'string',
      validation: (rule) => [
        rule.required().length(11).error('Må være et telefonnummer på 8 siffer'),
        rule.regex(/^[0-9\s]*$/).error('Må være telefonnummer'),
      ],
    },
    {
      name: 'mail',
      title: 'E-post',
      type: 'string',
      validation: (rule) => rule.required().email(),
    },
    {
      name: 'openingHours',
      title: 'Åpningstider',
      type: 'object',
      validation: (rule) => rule.required(),
      fields: [
        {name: 'manToFre', title: 'Mandag - fredag', type: 'string'},
        {name: 'sat', title: 'Lørdag', type: 'string'},
      ],
    },
  ],
}

export default siteSettings

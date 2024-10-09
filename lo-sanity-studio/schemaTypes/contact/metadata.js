const contactMetadata = {
  name: 'contactMetadata',
  title: 'Meta data',
  type: 'document',
  icon: 'RefreshIcon',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      description:
        'Kort og konsis. Bruk relevante nøkkelord og sørg for at tittelen fanger oppmerksomheten til leserne.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'desc',
      title: 'Beskrivelse',
      description:
        'Kortfattet, mellom 150-160 tegn og bør inkludere relevante nøkkelord for å tiltrekke det riktige publikum.',
      type: 'text',
      rows: 4,
      validation: (rule) => [rule.required().max(160).error('Må være mindre enn 160 tegn')],
    },
  ],
}

export default contactMetadata

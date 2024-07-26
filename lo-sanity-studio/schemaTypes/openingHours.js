const openingHours = {
  name: 'openingHours',
  title: 'Åpningstider',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      initialValue: 'Åpningstider',
      readOnly: true,
    },
    {
      name: 'content',
      title: 'Åpningstider',
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

export default openingHours

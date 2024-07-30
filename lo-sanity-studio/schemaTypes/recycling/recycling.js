import {RefreshIcon} from '@sanity/icons'

const recycling = {
  name: 'recycling',
  title: 'Gjenbrukshjørnet',
  type: 'document',
  icon: RefreshIcon,
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string',
      initialValue: 'Gjenbrukshjørnet',
      // readOnly: true,
    },
    {
      name: 'content',
      title: 'Innhold',
      type: 'array',
      //   validation: (rule) => rule.required(),
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}

export default recycling

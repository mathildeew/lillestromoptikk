import {EyeOpenIcon} from '@sanity/icons'

const brands = {
  name: 'brands',
  title: 'Merker',
  type: 'document',
  icon: EyeOpenIcon,
  fields: [
    {
      name: 'title',
      title: 'Merke',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
}

export default brands

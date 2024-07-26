import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'LO Sanity Studio',

  projectId: 'mabzg02x',
  dataset: 'production',
  apiVersion: '2024-07-26',

  plugins: [structureTool({structure: myStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

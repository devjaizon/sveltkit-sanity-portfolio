import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'deytspb2',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), media(), unsplashImageAsset()],

  schema: {
    types: schemaTypes,
  },
})

import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  schema: process.env.HYGRAPH_ENDPOINT,
  documents: ["./src/queries/getArticles.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true
      }
    },
  },
}

export default config
// index.ts
import 'reflect-metadata'
import * as dontenv from 'dotenv'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { context } from './context'
import resolvers from './resolvers'
import { Auth } from './schemas/Auth'
import Authentication from './middlewares/Authentication'
dontenv.config()
const { PORT } = process.env

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [
      Auth,
      ...resolvers
    ],
    authChecker: Authentication,
    emitSchemaFile: true
  })

  return new ApolloServer({
    schema,
    context
  }).listen({ port: PORT }, () =>
    console.log(`👌 Server ready at: http://localhost:${PORT}`)
  )
}

app()

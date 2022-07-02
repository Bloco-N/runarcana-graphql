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

const app = async (port, log = true) => {
  const schema = await tq.buildSchema({
    resolvers: [
      Auth,
      ...resolvers
    ],
    authChecker: Authentication,
    emitSchemaFile: true
  })

  const server = new ApolloServer({
    schema,
    context
  })
  server.listen({ port }, () => {
    if (log) console.log(`👌 Server ready at: http://localhost:${port}`)
  }
  )
  return server
}

export { app }

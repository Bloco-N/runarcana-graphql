// index.ts
import 'reflect-metadata'
import * as dontenv from 'dotenv'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { context } from './context'
import { Auth } from './schemas/Auth'
import Authentication from './middlewares/Authentication'
import { relationResolvers } from '../prisma/generated/type-graphql'
import resolvers from './resolvers'
dontenv.config()

const app = async (port:number, log = true) => {
  const schema = await tq.buildSchema({
    resolvers: [
      Auth,
      ...relationResolvers,
      ...resolvers
    ],
    validate: false,
    authChecker: Authentication,
    emitSchemaFile: true
  })

  const server = new ApolloServer({
    schema,
    context
  })
  const info = await server.listen({ port }, () => {
    if (log) console.log(`👌 Server ready at: http://localhost:${port}`)
  }
  )
  return { server, info }
}

export { app }

import 'reflect-metadata'
import * as dontenv from 'dotenv'
import * as tq from 'type-graphql'
import { context } from './context'
import { Auth } from './schemas/Auth'
import Authentication from './middlewares/Authentication'
import { relationResolvers } from '../prisma/generated/type-graphql'
import resolvers from './resolvers'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

dontenv.config()

const app = async (port: number, log = true) => {
  const schema = await tq.buildSchema({
    resolvers: [Auth, ...relationResolvers, ...resolvers],
    validate: false,
    authChecker: Authentication,
    emitSchemaFile: true
  })

  const server = new ApolloServer({ schema })
  const { url } = await startStandaloneServer(server, {
    listen: { port },
    context
  })

  if (log) console.log(`🚀  Server ready at: ${url}`)

  return { server, url }
}

export { app }

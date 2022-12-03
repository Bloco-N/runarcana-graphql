import 'reflect-metadata'

import { relationResolvers }     from '../prisma/generated/type-graphql'
import { context }               from './context'
import Authentication            from './middlewares/Authentication'
import resolvers                 from './resolvers'
import { Auth }                  from './schemas/Auth'
import { ApolloServer }          from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import * as dontenv              from 'dotenv'
import * as tq                   from 'type-graphql'

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

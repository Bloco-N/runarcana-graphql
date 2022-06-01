// index.ts
import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { context } from './context'
import resolvers from './resolvers'
import { Auth } from './schemas/Auth'
import Authentication from './middlewares/Authentication'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [
      Auth,
      resolvers.UserResolver,
      resolvers.SessionResolver
    ],
    authChecker: Authentication,
    emitSchemaFile: true
  })

  new ApolloServer({
    schema,
    context
  }).listen({ port: 4000 }, () =>
    console.log('👌 Server ready at: http://localhost:4000')
  )
}

app()

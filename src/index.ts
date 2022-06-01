// index.ts
import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { context } from './context'
import { UserResolver } from './resolvers/UserResolver'
import { Auth } from './schemas/Auth'
import { SessionResolver } from './resolvers/SessionResolver'
import Authentication from './middlewares/Authentication'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [
      UserResolver,
      Auth,
      SessionResolver
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

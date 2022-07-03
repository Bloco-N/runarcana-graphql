/* eslint-disable no-undef */
import { ApolloServer, gql } from 'apollo-server'
import { app } from '../../src/app'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
let server:ApolloServer

describe('UserResolver tests', () => {
  beforeAll(async () => {
    server = await app(8081, false)
  })

  afterAll(async () => {
    server.stop()
    await prisma.user.delete({ where: { username: 'aurora' } })
    await prisma.$disconnect()
  })

  const SIGN_UP = gql`
    mutation SignUp($data: SignUpInputData!) {
      signUp(data: $data) {
        message
      }
    }
  `
  const SIGN_IN = gql`
    mutation SignIn($data: SignInInputData!) {
      signIn(data: $data) {
        
        token

      }
    }
  `

  test('should create a user', async () => {
    const res = await server.executeOperation({
      query: SIGN_UP,
      variables: {
        data: {
          username: 'aurora',
          nickname: 'lazuli',
          password: 'aurorasenha'
        }
      }
    })

    const { data: { signUp: { message } } } = res
    expect(message).toBe('✅ user created')
  })

  test('should not create user', async () => {
    const res = await server.executeOperation({
      query: SIGN_UP,
      variables: {
        data: {
          username: 'aurora',
          password: 'aurorasenha'
        }
      }
    })
    const { data } = res
    expect(data).not.toBeDefined()
  })

  test('should sign in', async () => {
    const res = await server.executeOperation({
      query: SIGN_IN,
      variables: {
        data: {
          username: 'aurora',
          password: 'aurorasenha'
        }
      }
    })
    const { data: { signIn } } = res
    expect(signIn).toHaveProperty('token')
  })

  test('should not sign in, wrong password', async () => {
    const res = await server.executeOperation({
      query: SIGN_IN,
      variables: {
        data: {
          username: 'aurora',
          password: 'aurorasenhaerrada'
        }
      }
    })
    const { errors: [GraphQLError] } = res
    const { message } = GraphQLError
    expect(message).toBe('❌ User or Password incorrect')
  })

  test('should not sign in, wrong username', async () => {
    const res = await server.executeOperation({
      query: SIGN_IN,
      variables: {
        data: {
          username: 'auroraisnothere',
          password: 'aurorasenha'
        }
      }
    })
    const { errors: [GraphQLError] } = res
    const { message } = GraphQLError
    expect(message).toBe('❌ User or Password incorrect')
  })
})

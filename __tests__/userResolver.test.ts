/* eslint-disable no-undef */
import { ApolloServer, gql } from 'apollo-server'
import { app } from '../src/app'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
let server:ApolloServer

describe('UserResolver tests', () => {
  beforeEach(async () => {
    server = await app(8081, false)
  })
  afterEach(async () => {
    server.stop()
  })

  afterAll(async () => {
    await prisma.user.delete({ where: { username: 'aurora' } })
    await prisma.$disconnect()
  })

  const query = gql`
    mutation SignUp($data: SignUpInputData!) {
      signUp(data: $data) {
        message
      }
    }
  `

  test('should create a user', async () => {
    const res = await server.executeOperation({
      query,
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
      query,
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
})

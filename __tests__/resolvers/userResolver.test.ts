/* eslint-disable no-undef */
import { ApolloServer, BaseContext } from '@apollo/server'
import { PrismaClient } from '@prisma/client'
import request from 'supertest'
import { app } from '../../src/app'

describe('UserResolver tests', () => {

  const prisma = new PrismaClient()
  let server: ApolloServer<BaseContext>, url: string
  const parse = (res: request.Response, operationName: string) => JSON.parse(res.text).data[operationName].message

  beforeAll(async () => {

    ({ server, url } = await app(8082, false))
  
  })

  afterAll(async () => {

    await server.stop()
    const yui = await prisma.user.findFirst({ where: { username: 'yui' } })
    await prisma.user.delete({ where: { username: yui.username } })
    await prisma.$disconnect()
  
  })

  test('should create a user', async () => {

    const CREATE_USER = `#graphql
      mutation SignUp($data: SignUpInputData!) {
        signUp(data: $data) {
          message
        }
      }`

    const operation = {
      query: CREATE_USER,
      variables: {
        data: {
          nickname: 'mel',
          password: '123456',
          username: 'yui'
        }
      }
    }

    const res = await request(url).post('/').send(operation)
    const message = parse(res, 'signUp')

    expect(message).toBeDefined()
    expect(message).toBe('✅ user created')
  
  })

})

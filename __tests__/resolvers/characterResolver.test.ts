/* eslint-disable no-undef */
import { ApolloServer, gql, ServerInfo } from 'apollo-server'
import { app } from '../../src/app'
import { PrismaClient } from '@prisma/client'
import request from 'supertest'

const prisma = new PrismaClient()
let server:ApolloServer
let url:string

const SIGN_UP = gql`
mutation SignUp($data: SignUpInputData!) {
  signUp(data: $data) {
    message
  }
}
`

describe('CharacterResolver tests', () => {
  beforeAll(async () => {
    const infos = await app(8081, false)
    server = infos.server
    url = infos.info.url

    await server.executeOperation({
      query: SIGN_UP,
      variables: {
        data: {
          username: 'aurora',
          nickname: 'lazuli',
          password: 'aurorasenha'
        }
      }
    })
  })

  afterAll(async () => {
    server.stop()
    const toru = await prisma.character.findFirst({ where: { name: 'toru' } })
    await prisma.character.delete({ where: { id: toru.id } })
    const aurora = await prisma.user.findFirst({ where: { username: 'aurora' } })
    await prisma.user.delete({ where: { username: aurora.username } })
    await prisma.$disconnect()
  })

  const CREATE_CHAR = `
    mutation Mutation($data: CharacterCreateInputData!) {
      createCharacter(data: $data) {
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

  test('should create a character', async () => {
    const resLogin = await server.executeOperation({
      query: SIGN_IN,
      variables: {
        data: {
          username: 'aurora',
          password: 'aurorasenha'
        }
      }
    })

    const { data: { signIn: { token } } } = resLogin

    const variables = {
      data: {
        regionId: 4,
        originId: 4,
        lineageId: 9,
        pastId: 11,
        name: 'toru',
        essence: 'a',
        expression: 'a',
        exaltation: 'a',
        runarcanaClassId: 2
      }
    }

    const queryData = {
      query: CREATE_CHAR,
      variables
    }
    const {body: {data : { createCharacter: { message}}}} = await request(url).post('/').send(queryData).set({ Authorization: "Bearer " + token })

    expect(message).toBeDefined()
    expect(message).toBe('✅ character created')
  })

  test('should add a class to character', () => {
    
  })
})

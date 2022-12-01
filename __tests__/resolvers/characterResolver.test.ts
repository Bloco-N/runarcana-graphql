/* eslint-disable no-undef */
import { PrismaClient } from '@prisma/client'
import request from 'supertest'
import { app } from '../../src/app'

describe('CharacterResolver tests', () => {
  const prisma = new PrismaClient()
  let server, url, token
  const parse = (res, operationName) => JSON.parse(res.text).data[operationName].message

  beforeAll(async () => {
    ;({ server, url } = await app(8081, false))

    const SIGN_UP = `#graphql
    mutation SignUp($data: SignUpInputData!) {
      signUp(data: $data) {
        message
      }
    }`

    const SIGN_IN = `#graphql
    mutation SignIn($data: SignInInputData!) {
      signIn(data: $data) {
        token
      }
    }`

    const signUpOperation = {
      query: SIGN_UP,
      variables: {
        data: {
          username: 'aurora',
          nickname: 'lazuli',
          password: 'aurorasenha'
        }
      }
    }

    const signInOperation = {
      query: SIGN_IN,
      variables: {
        data: {
          username: 'aurora',
          password: 'aurorasenha'
        }
      }
    }

    await request(url).post('/').send(signUpOperation)
    const res = await request(url).post('/').send(signInOperation)

    token = JSON.parse(res.text).data.signIn.token
  })

  afterAll(async () => {
    await server.stop()
    const toru = await prisma.character.findFirst({
      where: { name: 'toru' }
    })
    await prisma.character.delete({ where: { id: toru.id } })
    const aurora = await prisma.user.findFirst({
      where: { username: 'aurora' }
    })
    await prisma.user.delete({ where: { username: aurora.username } })
    await prisma.$disconnect()
  })

  test('should create a character', async () => {
    const CREATE_CHAR = `#graphql
    mutation CreateCharacter($data: CharacterCreateInputData!) {
    createCharacter(data: $data) {
        message
      }
    }`

    const operation = {
      query: CREATE_CHAR,
      variables: {
        data: {
          runarcanaClassId: 2,
          charData: {
            regionId: 4,
            originId: 4,
            lineageId: 9,
            pastId: 11,
            name: 'toru',
            essence: 'a',
            expression: 'a',
            exaltation: 'a'
          }
        }
      }
    }

    const res = await request(url)
      .post('/')
      .send(operation)
      .set({ Authorization: 'Bearer ' + token })
    const message = parse(res, 'createCharacter')

    expect(message).toBeDefined()
    expect(message).toBe('✅ character created')
  })
})

/* eslint-disable no-undef */
import { ApolloServer, gql } from 'apollo-server'
import { app } from '../../src/app'
import { PrismaClient } from '@prisma/client'
import request from 'supertest'

const prisma = new PrismaClient()
let server:ApolloServer
let url:string
let token:string

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

    const resLogin = await server.executeOperation({
      query: SIGN_IN,
      variables: {
        data: {
          username: 'aurora',
          password: 'aurorasenha'
        }
      }
    })

    const { data: { signIn: { token: tokenLogin } } } = resLogin

    token = tokenLogin
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
    const { body: { data: { createCharacter: { message } } } } = await request(url).post('/').send(queryData).set({ Authorization: 'Bearer ' + token })

    expect(message).toBeDefined()
    expect(message).toBe('✅ character created')
  })

  test('should add a class to character', async () => {
    const { id } = await prisma.character.findFirst({ where: { name: 'toru' } })

    const ADD_CLASS = `
      mutation AddCharacterClass($data: CharacterIdPair!) {
        addCharacterClass(data: $data) {
          message
        }
      }
    `

    const variables = {
      data: {
        otherId: 3,
        characterId: id
      }
    }

    const queryData = {
      query: ADD_CLASS,
      variables
    }

    const { body: { data: { addCharacterClass: { message } } } } = await request(url).post('/').send(queryData).set({ Authorization: 'Bearer ' + token })
    expect(message).toBeDefined()
    expect(message).toBe('✅ character updated')
  })

  // test('should update character class', async () => {
  //   const { id } = await prisma.character.findFirst({ where: { name: 'toru' } })

  //   const variables = {
  //     data: {
  //       id: {
  //         otherId: 3,
  //         characterId: id
  //       },
  //       runarcanaClassId: 3,
  //       level: 2
  //     }
  //   }

  //   const UPDATE_CLASS = `
  //     mutation UpdateCharacterClass($data: CharacterUpdateClassInputData!) {
  //       updateCharacterClass(data: $data) {
  //         message
  //       }
  //     }
  //   `

  //   const queryData = {
  //     query: UPDATE_CLASS,
  //     variables
  //   }

  //   const { body: { data: { updateCharacterClass: { message } } } } = await request(url).post('/').send(queryData).set({ Authorization: 'Bearer ' + token })
  //   expect(message).toBeDefined()
  //   expect(message).toBe('✅ character updated')
  // })

  test('should update character attributes', async () => {
    const { id } = await prisma.character.findFirst({ where: { name: 'toru' } })

    const variables = {
      data: {
        id,
        strength: 11,
        dexterity: 13,
        constitution: 15,
        intelligence: 7,
        wisdom: 20,
        charisma: 19
      }
    }

    const UPDATE_ATTRIBUTES = `
      mutation UpdateCharacterAttributes($data: CharacterUpdateAttributesInputData!) {
        updateCharacterAttributes(data: $data) {
          message
        }
      }
    `

    const queryData = {
      query: UPDATE_ATTRIBUTES,
      variables
    }

    const { body: { data: { updateCharacterAttributes: { message } } } } = await request(url).post('/').send(queryData).set({ Authorization: 'Bearer ' + token })
    expect(message).toBeDefined()
    expect(message).toBe('✅ character updated')
  })

  test('should update character proficiences', async () => {
    const { id } = await prisma.character.findFirst({ where: { name: 'toru' } })

    const variables = {
      data: {
        id,
        charData: {
          acrobatics: 'PROFICIENT',
          arcana: 'SPECIALIST',
          athletics: 'SPECIALIST'
        }

      }
    }

    const UPDATE_PROFICIENCY = `
      mutation UpdateCharacterProficiency($data: CharacterUpdateProficiencyInputData!) {
        updateCharacterProficiency(data: $data) {
          message
        }
      }
    `

    const queryData = {
      query: UPDATE_PROFICIENCY,
      variables
    }

    const { body: { data: { updateCharacterProficiency: { message } } } } = await request(url).post('/').send(queryData).set({ Authorization: 'Bearer ' + token })
    expect(message).toBeDefined()
    expect(message).toBe('✅ character updated')
  })

  test('should get mod and skills ', async () => {
    const { id } = await prisma.character.findFirst({ where: { name: 'toru' } })

    const variables = {
      getCharacterModAndSkillsId: id
    }

    const GET_MODS_AND_SKILLS = `
      query GetCharacterModAndSkills($getCharacterModAndSkillsId: Float!) {
        getCharacterModAndSkills(id: $getCharacterModAndSkillsId) {
          strengthMod
          dexterityMod
          constitutionMod
          intelligenceMod
          wisdomMod
          charismaMod
          acrobaticsValue
          arcanaValue
          athleticsValue
          performanceValue
          deceptionValue
          stealthValue
          historyValue
          intimidationValue
          animalHandlingValue
          medicineValue
          natureValue
          perceptionValue
          persuasionValue
          sleightOfHandValue
          religionValue
          survivalValue
          tecnologyValue
          strengthSavingThrowValue
          dexteritySavingThrowValue
          constitutionSavingThrowValue
          intelligenceSavingThrowValue
          wisdomSavingThrowValue
          charismaSavingThrowValue
        }
      }
    `
    const queryData = {
      query: GET_MODS_AND_SKILLS,
      variables
    }

    const { body: { data } } = await request(url).post('/').send(queryData).set({ Authorization: 'Bearer ' + token })
    expect(data).toStrictEqual(
      {
        getCharacterModAndSkills: {
          strengthMod: 0,
          dexterityMod: 1,
          constitutionMod: 2,
          intelligenceMod: -2,
          wisdomMod: 5,
          charismaMod: 4,
          acrobaticsValue: 3,
          arcanaValue: 2,
          athleticsValue: 4,
          performanceValue: 4,
          deceptionValue: 4,
          stealthValue: 1,
          historyValue: -2,
          intimidationValue: 4,
          animalHandlingValue: 5,
          medicineValue: 5,
          natureValue: -2,
          perceptionValue: 5,
          persuasionValue: 4,
          sleightOfHandValue: 1,
          religionValue: -2,
          survivalValue: 5,
          tecnologyValue: -2,
          strengthSavingThrowValue: 0,
          dexteritySavingThrowValue: 1,
          constitutionSavingThrowValue: 2,
          intelligenceSavingThrowValue: -2,
          wisdomSavingThrowValue: 5,
          charismaSavingThrowValue: 4
        }
      }
    )
  })
})

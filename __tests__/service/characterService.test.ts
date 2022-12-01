/* eslint-disable no-undef */
import 'reflect-metadata'
import { PrismaClient } from '@prisma/client'
import { Character } from '../../prisma/generated/type-graphql'
import CharacterCreateInputData from '../../src/inputs/Character/CharacterCreateInputData'
import SignUpInputData from '../../src/inputs/User/SignUpInputData'
import { IContext } from '../../src/interfaces/IContext'
import CharacterService from '../../src/services/CharacterService'
import UserService from '../../src/services/UserService'
import { CharacterModsAndSkills } from '../../src/schemas/Character/CharacterComplements/CharacterModsAndSkills'

describe('CharacterService tests', () => {
  const userService = new UserService()
  const characterService = new CharacterService()
  let character: Character
  const ctx: IContext = {
    prisma: new PrismaClient()
  }

  beforeAll(async () => {
    const data: SignUpInputData = {
      username: 'testUser',
      nickname: 'testNick',
      password: 'testPass'
    }

    ctx.user = await userService.create(ctx, data)
  })

  afterAll(async () => {
    await ctx.prisma.user.update({
      where: { username: ctx.user.username },
      data: { Characters: { deleteMany: {} } }
    })
    await ctx.prisma.user.delete({ where: { username: ctx.user.username } })
    ctx.prisma.$disconnect()
  })

  test('should return a character', async () => {
    const data: CharacterCreateInputData = {
      runarcanaClassId: 1,
      charData: {
        name: 'testName',
        essence: 'testEssence',
        expression: 'testExpression',
        exaltation: 'testExaltation',
        regionId: 1,
        originId: 1,
        pastId: 1
      }
    }

    character = await characterService.create(ctx, data)

    expect(character).toBeDefined()
  })

  test('should return character skills and mods', async () => {
    const characterModAndSkill = await characterService.getCharacterModAndSkills(character)

    expect(characterModAndSkill).toBeDefined()
    expect(characterModAndSkill).toMatchObject<CharacterModsAndSkills>({
      strengthMod: -5,
      athleticsValue: -5,
      strengthSavingThrowValue: -5
    } as CharacterModsAndSkills)
  })
})

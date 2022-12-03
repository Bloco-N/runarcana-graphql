/* eslint-disable no-undef */
import 'reflect-metadata'

import { Character, CharacterUpdateInput } from '../../prisma/generated/type-graphql'
import CharacterCreateInputData            from '../../src/inputs/Character/CharacterCreateInputData'
import CharacterLevelUpInputData           from '../../src/inputs/Character/CharacterLevelUpInputData'
import SignUpInputData                     from '../../src/inputs/User/SignUpInputData'
import { IContext }                        from '../../src/interfaces/IContext'
import { CharacterModsAndSkills }          from '../../src/schemas/Character/CharacterComplements/CharacterModsAndSkills'
import CharacterService                    from '../../src/services/CharacterService'
import UserService                         from '../../src/services/UserService'
import { PrismaClient }                    from '@prisma/client'

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

  test('should return character updated', async () => {

    const data: CharacterUpdateInput = {
      strength: 12,
      constitution: 4,
      dexterity: 20,
      intelligence: 16,
      wisdom: 8,
      charisma: 0
    }

    character = await characterService.update(character, data, ctx)

    expect(character).toBeDefined()
    expect(character).toMatchObject<Character>({
      ...data
    } as Character)
  
  })

  test('should return character level uped', async () => {

    const data: CharacterLevelUpInputData = {
      runarcanaClassId: 1,
      roll: 5
    }

    character = await characterService.levelUpCharacter(character, data, ctx)

    expect(character).toBeDefined()
    expect(character).toMatchObject<Character>({
      level: 2,
      classHpBase: 13
    } as Character)
  
  })

  test('should return character skills and mods', async () => {

    const characterModAndSkill = await characterService.getCharacterModAndSkills(character)

    expect(characterModAndSkill).toBeDefined()
    expect(characterModAndSkill).toMatchObject<CharacterModsAndSkills>({
      strengthMod: 1,
      constitutionMod: -3,
      dexterityMod: 5,
      intelligenceMod: 3,
      wisdomMod: -1,
      charismaMod: -5
    } as CharacterModsAndSkills)
  
  })

  test('should return the deleted character', async () => {

    const deletedCharacter = await characterService.delete(character, ctx)

    expect(deletedCharacter).toBeDefined()
    expect(deletedCharacter).toMatchObject(character)
  
  })

})

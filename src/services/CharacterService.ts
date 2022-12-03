import {
  findBaseSpeedArgs,
  findCharacteristicsArgs,
  firsClassArgs,
  firstCharacterCreateArgs,
  lvlUpUpdateCharacterArgs,
  lvlUpfindCharacterArgs
} from '../../utils/query'

import { Character, CharacterUpdateInput } from '../../prisma/generated/type-graphql'
import { currentCharacteristics }          from '../../utils/characterFuncitons'
import CharacterCreateInputData            from '../inputs/Character/CharacterCreateInputData'
import CharacterLevelUpInputData           from '../inputs/Character/CharacterLevelUpInputData'
import { IContext }                        from '../interfaces/IContext'
import { CharacterModsAndSkills }          from '../schemas/Character/CharacterComplements/CharacterModsAndSkills'
import { Characteristic }                  from '../schemas/Character/CharacterComplements/Characteristic'

export default class CharacterService {

  public async create(ctx: IContext, data: CharacterCreateInputData): Promise<Character> {

    const firstClass = await ctx.prisma.runarcanaClass.findUnique(firsClassArgs(data.runarcanaClassId))
    return await ctx.prisma.character.create(firstCharacterCreateArgs(ctx.user.id, data.charData, firstClass))
  
  }

  public async update(character: Character, data: CharacterUpdateInput, ctx: IContext): Promise<Character> {

    return await ctx.prisma.character.update({
      where: {
        id: character.id
      },
      data
    })
  
  }

  public async delete(character: Character, ctx: IContext): Promise<Character> {

    return await ctx.prisma.character.delete({
      where: {
        id: character.id
      }
    })
  
  }

  public async levelUpCharacter(character: Character, data: CharacterLevelUpInputData, ctx: IContext): Promise<Character> {

    const findCharacterArgs = lvlUpfindCharacterArgs(character.id, data.runarcanaClassId)
    const characterLUI = await ctx.prisma.character.findUnique(findCharacterArgs)
    const updateCharacterArgs = lvlUpUpdateCharacterArgs(characterLUI, data.roll)
    return await ctx.prisma.character.update(updateCharacterArgs)
  
  }

  public async getCharacterModAndSkills(character: Character): Promise<CharacterModsAndSkills> {

    enum ProficiencyValue {
      NOT_PROFICIENT,
      PROFICIENT,
      SPECIALIST
    }

    const mod = (x: number) => Math.floor((x - 10) / 2)
    const proficiency = (prof: string, mod: number) => mod + character.proficiencyBonus * ProficiencyValue[prof]
    const atributeMod = (item: { atribute: string }): number => atributesMods[`${item.atribute}Mod`]

    const atributes = [
      { atribute: 'strength', skills: ['athletics'] },
      { atribute: 'dexterity', skills: ['acrobatics', 'sleightOfHand', 'stealth'] },
      { atribute: 'constitution', skills: [] },
      { atribute: 'intelligence', skills: ['arcana', 'history', 'investigation', 'nature', 'religion', 'tecnology'] },
      { atribute: 'wisdom', skills: ['insight', 'animalHandling', 'medicine', 'perception', 'survival'] },
      { atribute: 'charisma', skills: ['deception', 'intimidation', 'performance', 'persuasion'] }
    ]

    const atributesMods = atributes.reduce((a, item) => ({
      ...a,
      [`${item.atribute}Mod`]: mod(character[item.atribute])
    }), {})
    const savingsValues = atributes.reduce((a, item) => ({
      ...a,
      [`${item.atribute}SavingThrowValue`]: proficiency(character[`${item.atribute}SavingThrow`], atributeMod(item))
    }), {})
    const skillsValues = atributes.reduce((a, item) => ({
      ...a,
      ...item.skills.reduce((a, skill) => ({
        ...a,
        [`${skill}Value`]: proficiency(character[skill], atributeMod(item))
      }), {})
    }), {})

    return {
      ...atributesMods,
      ...savingsValues,
      ...skillsValues
    } as CharacterModsAndSkills
  
  }

  public async getCharacteristics(ctx: IContext, character: Character): Promise<Characteristic[]> {

    const char: Character = await ctx.prisma.character.findUnique(findCharacteristicsArgs(character.id))
    return currentCharacteristics(char.CharacterRunarcanaClasses)
  
  }

  public async getBaseSpeed(character: Character, ctx: IContext): Promise<number> {

    const charInfo: Character = await ctx.prisma.character.findUnique(findBaseSpeedArgs(character.id))

    const {
      Origin: { baseSpeed },
      Lineage: { aditionalBaseSpeed = 0 }
    } = charInfo.Lineage ? charInfo : { ...charInfo, Lineage: {} }

    return baseSpeed + aditionalBaseSpeed
  
  }

}

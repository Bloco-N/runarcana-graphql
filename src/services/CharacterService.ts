import CharacterCreateInputData from '../inputs/Character/CharacterCreateInputData'
import { IContext } from '../interfaces/IContext'
import { CharacterModsAndSkills } from '../schemas/Character/CharacterComplements/CharacterModsAndSkills'
import { currentCharacteristics } from '../../utils/characterFuncitons'
import CharacterLevelUpInputData from '../inputs/Character/CharacterLevelUpInputData'
import { Character, CharacterRunarcanaClass } from '../../prisma/generated/type-graphql'
import {
  findBaseSpeedArgs,
  findCharacteristicsArgs,
  findLvlUpCharClassArgs,
  firsClassArgs,
  firstCharacterCreateArgs,
  updateLvlUpCharClassArgs
} from '../../utils/query'
import { Characteristic } from '../schemas/Character/CharacterComplements/Characteristic'

export default class CharacterService {

  public async create(ctx: IContext, data: CharacterCreateInputData): Promise<Character> {

    const firstClass = await ctx.prisma.runarcanaClass.findUnique(firsClassArgs(data.runarcanaClassId))
    return (await ctx.prisma.character.create(firstCharacterCreateArgs(ctx.user.id, data.charData, firstClass))) as Character
  
  }

  public async levelUpCharacter(ctx: IContext, data: CharacterLevelUpInputData): Promise<CharacterRunarcanaClass> {

    const charClass = (await ctx.prisma.characterRunarcanaClass.findUnique(findLvlUpCharClassArgs(data))) as CharacterRunarcanaClass
    return (await ctx.prisma.characterRunarcanaClass.update(updateLvlUpCharClassArgs(data, charClass))) as CharacterRunarcanaClass
  
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

    const char = (await ctx.prisma.character.findUnique(findCharacteristicsArgs(character.id))) as Character
    return currentCharacteristics(char.CharacterRunarcanaClasses)
  
  }

  public async getBaseSpeed(character: Character, ctx: IContext) {

    const charInfo = (await ctx.prisma.character.findUnique(findBaseSpeedArgs(character.id))) as Character

    const {
      Origin: { baseSpeed },
      Lineage: { aditionalBaseSpeed = 0 }
    } = charInfo.Lineage ? charInfo : { ...charInfo, Lineage: {} }

    return baseSpeed + aditionalBaseSpeed
  
  }

}

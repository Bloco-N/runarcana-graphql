import CharacterCreateInputData from '../inputs/Character/CharacterCreateInputData'
import { IContext } from '../interfaces/IContext'
import { proficiency } from '@prisma/client'
import { CharacterModsAndSkills } from '../schemas/Character/CharacterComplements/CharacterModsAndSkills'
import { currentCharacteristics, levelUp } from '../../utils/characterFuncitons'
import CharacterLevelUpInputData from '../inputs/Character/CharacterLevelUpInputData'
import { Character } from '../../prisma/generated/type-graphql'
import { firsClassArgs, firstCharacterCreateArgs } from '../../utils/query'

export default class CharacterService {
  public async create (ctx:IContext, data:CharacterCreateInputData) {
    const firstClass = await ctx.prisma.runarcanaClass.findUnique(firsClassArgs(data.runarcanaClassId))

    const character = await ctx.prisma.character.create(firstCharacterCreateArgs(ctx.user.id, data.charData, firstClass))

    if (!character) throw new Error('❌ failed to create character')
  }

  public async levelUpCharacter (ctx:IContext, data:CharacterLevelUpInputData) {
    const characterRunarcanaClass = await ctx.prisma.characterRunarcanaClass.findUnique({
      where: {
        runarcanaClassId_characterId: {
          characterId: data.characterId,
          runarcanaClassId: data.runarcanaClassId
        }
      },
      select: {
        progress: true,
        level: true,
        RunarcanaClass: {
          select: {
            progress: true
          }
        },
        Character: {
          select: {
            level: true,
            classHpBase: true
          }
        }
      }
    })

    const levelUpdata = {
      characterProgress: characterRunarcanaClass.progress,
      characterLevel: characterRunarcanaClass.Character.level,
      classProgress: characterRunarcanaClass.RunarcanaClass.progress,
      characterClassLevel: characterRunarcanaClass.level,
      hitDieRoll: data.hitDie
    }

    const update = await ctx.prisma.characterRunarcanaClass.update({
      where: {
        runarcanaClassId_characterId: {
          characterId: data.characterId,
          runarcanaClassId: data.runarcanaClassId
        }
      },
      data: levelUp(levelUpdata)
    })

    if (!update) throw new Error('❌ failed to update character')
  }

  public async getCharacterModAndSkills (ctx:IContext, character: Character): Promise <CharacterModsAndSkills> {
    const mod = (x:number) => Math.floor((x - 10) / 2)
    const proficiency = (prof:proficiency, mod:number) => {
      switch (prof) {
        case 'NOT_PROFICIENT':
          return mod
        case 'PROFICIENT':
          return mod + character.proficiencyBonus
        case 'SPECIALIST':
          return mod + character.proficiencyBonus * 2
      }
    }
    const modifiers = {
      strengthMod: mod(character.strength),
      dexterityMod: mod(character.dexterity),
      constitutionMod: mod(character.constitution),
      intelligenceMod: mod(character.intelligence),
      wisdomMod: mod(character.wisdom),
      charismaMod: mod(character.charisma)
    }
    const skills = {
      acrobaticsValue: proficiency(character.acrobatics, modifiers.dexterityMod),
      arcanaValue: proficiency(character.arcana, modifiers.intelligenceMod),
      athleticsValue: proficiency(character.athletics, modifiers.strengthMod),
      performanceValue: proficiency(character.performance, modifiers.charismaMod),
      deceptionValue: proficiency(character.deception, modifiers.charismaMod),
      stealthValue: proficiency(character.stealth, modifiers.dexterityMod),
      historyValue: proficiency(character.history, modifiers.intelligenceMod),
      intimidationValue: proficiency(character.intimidation, modifiers.charismaMod),
      animalHandlingValue: proficiency(character.animalHandling, modifiers.wisdomMod),
      medicineValue: proficiency(character.medicine, modifiers.wisdomMod),
      natureValue: proficiency(character.nature, modifiers.intelligenceMod),
      perceptionValue: proficiency(character.perception, modifiers.wisdomMod),
      persuasionValue: proficiency(character.persuasion, modifiers.charismaMod),
      sleightOfHandValue: proficiency(character.sleightOfHand, modifiers.dexterityMod),
      religionValue: proficiency(character.religion, modifiers.intelligenceMod),
      survivalValue: proficiency(character.survival, modifiers.wisdomMod),
      tecnologyValue: proficiency(character.tecnology, modifiers.intelligenceMod),
      strengthSavingThrowValue: proficiency(character.strengthSavingThrow, modifiers.strengthMod),
      dexteritySavingThrowValue: proficiency(character.dexteritySavingThrow, modifiers.dexterityMod),
      constitutionSavingThrowValue: proficiency(character.constitutionSavingThrow, modifiers.constitutionMod),
      intelligenceSavingThrowValue: proficiency(character.intelligenceSavingThrow, modifiers.intelligenceMod),
      wisdomSavingThrowValue: proficiency(character.wisdomSavingThrow, modifiers.wisdomMod),
      charismaSavingThrowValue: proficiency(character.charismaSavingThrow, modifiers.charismaMod)
    }
    const CMS : CharacterModsAndSkills = { ...modifiers, ...skills }
    return CMS
  }

  public async getCharacteristics (ctx: IContext, character: Character) {
    const char = await ctx.prisma.character.findUnique({
      where: {
        id: character.id
      },
      include: {
        CharacterRunarcanaClasses: {
          include: {
            RunarcanaClass: true
          }
        }
      }
    })
    return currentCharacteristics(char.CharacterRunarcanaClasses)
  }
}

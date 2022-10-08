import CharacterCreateInputData from '../inputs/Character/CharacterCreateInputData'
import CharacterUpdateClassInputData from '../inputs/Character/CharacterUpdateClassInputData'
import CharacterUpdateInputData from '../inputs/Character/CharacterUpdateInputData'
import CharacterIdPair from '../inputs/Character/CharacterIdPair'
import { IContext } from '../interfaces/IContext'
import CharacterUpdateAttributesInputData from '../inputs/Character/CharacterUpdateAttributesInputData'
import CharacterUpdateProficiencyInputData from '../inputs/Character/CharacterUpdateProeficiencyInputData'
import { proficiency } from '@prisma/client'
import { CharacterModsAndSkills } from '../schemas/CharacterModsAndSkills'

export default class CharacterService {
  public async create (ctx:IContext, data:CharacterCreateInputData) {
    const { runarcanaClassId, ...charData } = data
    const character = await ctx.prisma.character.create({
      data: {
        userId: ctx.user.id,
        ...charData
      }
    })
    await ctx.prisma.characterRunarcanaClass.create({
      data: {
        characterId: character.id,
        runarcanaClassId,
        level: 1
      }
    })

    if (!character) throw new Error('❌ failed to create character')
  }

  public async update (ctx:IContext, data:CharacterUpdateInputData) {
    const { id, ...charData } = data
    const character = await ctx.prisma.character.update({
      where: {
        id
      },
      data: {
        ...charData
      }
    })
    if (!character) throw new Error('❌ failed to update character')
  }

  public async delete (ctx:IContext, id:number) {
    const deleted = await ctx.prisma.character.delete({
      where: {
        id
      }
    })
    if (!deleted) throw new Error('❌ failed to delete character')
  }

  public async addRunarcanaClass (ctx:IContext, data:CharacterIdPair) {
    const characterRunarcanaClass = await ctx.prisma.characterRunarcanaClass.create({
      data: {
        characterId: data.characterId,
        runarcanaClassId: data.otherId,
        level: 1
      }
    })
    if (!characterRunarcanaClass) throw new Error('❌ failed to update character')
  }

  public async updateRunarcanaClass (ctx:IContext, data:CharacterUpdateClassInputData) {
    const { id, ...classData } = data
    const characterRunarcanaClass = await ctx.prisma.characterRunarcanaClass.update({
      where: {
        runarcanaClassId_characterId: {
          characterId: id.characterId,
          runarcanaClassId: id.otherId
        }
      },
      data: {
        ...classData
      }
    })
    if (!characterRunarcanaClass) throw new Error('❌ failed to update character')
  }

  public async levelUpRunarcanaClass (ctx:IContext, data:CharacterIdPair) {
    const characterRunarcanaClass = await ctx.prisma.characterRunarcanaClass.findUnique({
      where: {
        runarcanaClassId_characterId: {
          characterId: data.characterId,
          runarcanaClassId: data.otherId
        }
      }
    })
    const update = await ctx.prisma.characterRunarcanaClass.update({
      where: {
        runarcanaClassId_characterId: {
          characterId: data.characterId,
          runarcanaClassId: data.otherId
        }
      },
      data: {
        level: characterRunarcanaClass.level + 1
      }
    })
    if (!update) throw new Error('❌ failed to update character')
  }

  public async deleteRunarcanaClass (ctx:IContext, data:CharacterIdPair) {
    const deleted = await ctx.prisma.characterRunarcanaClass.delete({
      where: {
        runarcanaClassId_characterId: {
          characterId: data.characterId,
          runarcanaClassId: data.otherId
        }
      }
    })

    if (!deleted) throw new Error('❌ failed to update character')
  }

  public async addSpellCharacter (ctx:IContext, data: CharacterIdPair) {
    const spellCharacter = await ctx.prisma.spellCharacter.create({
      data: {
        characterId: data.characterId,
        spellId: data.otherId
      }
    })
    if (!spellCharacter) throw new Error('❌ failed to update character')
  }

  public async deleteSpellCharacter (ctx:IContext, data:CharacterIdPair) {
    const deleted = await ctx.prisma.spellCharacter.delete({
      where: {
        spellId_characterId: {
          characterId: data.characterId,
          spellId: data.otherId
        }
      }
    })
    if (!deleted) throw new Error('❌ failed to update character')
  }

  public async addInheritance (ctx:IContext, data:CharacterIdPair) {
    const characterInheritance = await ctx.prisma.characterInheritance.create({
      data: {
        characterId: data.characterId,
        inheritanceId: data.otherId
      }
    })

    if (!characterInheritance) throw new Error('❌ failed to update character')
  }

  public async deleteInheritance (ctx:IContext, data:CharacterIdPair) {
    const characterInheritance = await ctx.prisma.characterInheritance.delete({
      where: {
        characterId_inheritanceId: {
          characterId: data.characterId,
          inheritanceId: data.otherId
        }
      }
    })

    if (!characterInheritance) throw new Error('❌ failed to update character')
  }

  public async updateCharacterAttributes (ctx:IContext, data:CharacterUpdateAttributesInputData) {
    const { id, ...charData } = data
    const character = await ctx.prisma.character.update({
      where: {
        id
      },
      data: {
        ...charData
      }
    })
    if (!character) throw new Error('❌ failed to update character')
  }

  public async updateCharacterProficiency (ctx:IContext, data:CharacterUpdateProficiencyInputData) {
    const { id, ...charData } = data
    const character = await ctx.prisma.character.update({
      where: {
        id
      },
      data: {
        acrobatics: charData.acrobatics as proficiency,
        arcana: charData.arcana as proficiency,
        athletics: charData.athletics as proficiency,
        performance: charData.performance as proficiency,
        deception: charData.deception as proficiency,
        stealth: charData.stealth as proficiency,
        history: charData.history as proficiency,
        intimidation: charData.intimidation as proficiency,
        animalHandling: charData.animalHandling as proficiency,
        medicine: charData.medicine as proficiency,
        nature: charData.nature as proficiency,
        perception: charData.perception as proficiency,
        persuasion: charData.persuasion as proficiency,
        sleightOfHand: charData.sleightOfHand as proficiency,
        religion: charData.religion as proficiency,
        survival: charData.survival as proficiency,
        tecnology: charData.tecnology as proficiency,
        strengthSavingThrow: charData.strengthSavingThrow as proficiency,
        dexteritySavingThrow: charData.dexteritySavingThrow as proficiency,
        constitutionSavingThrow: charData.constitutionSavingThrow as proficiency,
        intelligenceSavingThrow: charData.intelligenceSavingThrow as proficiency,
        wisdomSavingThrow: charData.wisdomSavingThrow as proficiency,
        charismaSavingThrow: charData.charismaSavingThrow as proficiency
      }
    })
    if (!character) throw new Error('❌ failed to update character')
  }

  public async getCharacterModAndSkills (ctx:IContext, id:number): Promise <CharacterModsAndSkills> {
    const character = await ctx.prisma.character.findUnique({ where: { id } })
    const mod = x => Math.floor((x - 10) / 2)
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
    return { ...modifiers, ...skills }
  }
}

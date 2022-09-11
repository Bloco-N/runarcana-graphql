import CharacterCreateInputData from '../inputs/Character/CharacterCreateInputData'
import CharacterUpdateClassInputData from '../inputs/Character/CharacterUpdateClassInputData'
import CharacterUpdateInputData from '../inputs/Character/CharacterUpdateInputData'
import CharacterIdPair from '../inputs/Character/CharacterIdPair'
import { IContext } from '../interfaces/IContext'

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

  public async addInheritance(ctx:IContext, data:CharacterIdPair){
    const characterInheritance = await ctx.prisma.characterInheritance.create({
      data:{
        characterId: data.characterId,
        inheritanceId: data.otherId
      }
    })

    if (!characterInheritance) throw new Error('❌ failed to update character')

  }

  public async deleteInheritance(ctx:IContext, data:CharacterIdPair){
    const characterInheritance = await ctx.prisma.characterInheritance.delete({
      where:{
        characterId_inheritanceId:{
          characterId: data.characterId,
          inheritanceId: data.otherId
        }
      }
    })

    if (!characterInheritance) throw new Error('❌ failed to update character')

  }

}

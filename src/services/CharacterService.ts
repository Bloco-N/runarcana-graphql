import CharacterAddClassInputData from '../inputs/Character/CharacterAddClassInputData'
import CharacterCreateInputData from '../inputs/Character/CharacterCreateInputData'
import CharacterRunarcanaClassId from '../inputs/Character/CharacterRunarcanaClassId'
import CharacterUpdateClassInputData from '../inputs/Character/CharacterUpdateClassInputData'
import CharacterUpdateInputData from '../inputs/Character/CharacterUpdateInputData'
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

  public async addRunarcanaClass (ctx:IContext, data:CharacterAddClassInputData) {
    const characterRunarcanaClass = await ctx.prisma.characterRunarcanaClass.create({
      data: {
        ...data,
        level: 1
      }
    })
    if (!characterRunarcanaClass) throw new Error('❌ failed to update character')
  }

  public async updateRunarcanaClass (ctx:IContext, data:CharacterUpdateClassInputData) {
    const { id, ...classData } = data
    const characterRunarcanaClass = await ctx.prisma.characterRunarcanaClass.update({
      where: {
        runarcanaClassId_characterId: id
      },
      data: {
        ...classData
      }
    })
    if (!characterRunarcanaClass) throw new Error('❌ failed to update character')
  }

  public async levelUpRunarcanaClass (ctx:IContext, data:CharacterRunarcanaClassId) {
    const characterRunarcanaClass = await ctx.prisma.characterRunarcanaClass.findUnique({
      where: {
        runarcanaClassId_characterId: data
      }
    })
    const update = await ctx.prisma.characterRunarcanaClass.update({
      where: {
        runarcanaClassId_characterId: data
      },
      data: {
        level: characterRunarcanaClass.level + 1
      }
    })
    if (!update) throw new Error('❌ failed to update character')
  }

  public async deleteRunarcanaClass (ctx:IContext, data:CharacterRunarcanaClassId) {
    const deleted = await ctx.prisma.characterRunarcanaClass.delete({
      where: {
        runarcanaClassId_characterId: data
      }
    })

    if (!deleted) throw new Error('❌ failed to update character')
  }
}

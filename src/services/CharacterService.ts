import { CharacterInputData } from '../inputs/CharacterInputData'
import { IContext } from '../interfaces/IContext'

export default class CharacterService {
  public async create (ctx:IContext, data:CharacterInputData) {
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
}

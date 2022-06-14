import { Arg, Authorized, Ctx, Mutation, Resolver } from 'type-graphql'
import { CharacterInputData } from '../inputs/CharacterInputData'
import { IContext } from '../interfaces/IContext'
import { Character } from '../schemas/Character'

@Resolver(Character)
export class CharacterResolver {
  @Mutation(() => Character)
  @Authorized()
  async create (@Arg('data') data:CharacterInputData, @Ctx() ctx:IContext):Promise<Character> {
    const character = await ctx.prisma.character.create({
      data: {
        userId: ctx.user.id,
        ...data
      }
    })
    return character
  }
}

import { Args, Ctx, Query, Resolver } from 'type-graphql'
import { FindManySpellArgs, Spell } from '../../prisma/generated/type-graphql'
import { IContext } from '../interfaces/IContext'
import SpellService from '../services/SpellService'

@Resolver(Spell)
export class SpellResolver {
  spellService = new SpellService()
  @Query(() => [Spell])
  async listAllSpells(@Ctx() ctx: IContext, @Args() args: FindManySpellArgs): Promise<Spell[]> {
    return await ctx.prisma.spell.findMany(args)
  }
}

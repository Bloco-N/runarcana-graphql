import { Arg, Ctx, Query, Resolver } from 'type-graphql'
import { Spell } from '../../prisma/generated/type-graphql'
import { IContext } from '../interfaces/IContext'
import { SpellResponse } from '../schemas/Spell/SpellResponse'
import SpellService from '../services/SpellService'

@Resolver(Spell)
export class SpellResolver {
  spellService = new SpellService()
  @Query(() => SpellResponse)
  async listAllSpells (@Ctx() ctx:IContext, @Arg('search', { nullable: true }) search:string): Promise<SpellResponse> {
    const spells = await this.spellService.listAll(ctx, search)
    return spells
  }
}

import { IContext } from '../interfaces/IContext'
import { SpellResponse } from '../schemas/SpellResponse'

export default class SpellService {
  public async listAll (ctx:IContext, search:string): Promise<SpellResponse> {
    const spellInclude = {
      Conjuration: true,
      Duration: true,
      Range: true,
      SpellComponents: {
        include: {
          Component: true
        }
      },
      SpellMysteries: {
        include: {
          Spell: true,
          Mystery: true
        }
      }
    }
    if (search) {
      const spells = await ctx.prisma.spell.findMany({
        where: {
          name: {
            contains: search,
            mode: 'insensitive'
          }
        },
        include: spellInclude
      })
      return {
        spells
      }
    }
    const spells = await ctx.prisma.spell.findMany({ include: spellInclude })
    return {
      spells
    }
  }
}

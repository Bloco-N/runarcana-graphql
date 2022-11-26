import { IContext } from '../interfaces/IContext'
import { SpellResponse } from '../schemas/Spell/SpellResponse'

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

    const query = {
      where: {
        name: {
          contains: search,
          mode: 'insensitive'
        }
      },
      include: spellInclude
    }

    const spells = await ctx.prisma.spell.findMany(search ? query : { include: spellInclude })

    return {
      spells
    }
  }
}

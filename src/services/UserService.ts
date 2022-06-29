import { IContext } from '../interfaces/IContext'
import { UserResponse } from '../schemas/UserResponse'

export default class UserService {
  public async fetchAll (ctx:IContext, charId:number): Promise<UserResponse> {
    const user = await ctx.prisma.user.findUnique({ where: { id: ctx.user.id } })
    if (!user) throw Error('❌ User not found')
    const spellInclude = {
      include: {
        Spell: {
          include: {
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
        }
      }
    }

    let characters = await ctx.prisma.character.findMany({
      where: { userId: ctx.user.id },
      include: {
        Past: true,
        Region: true,
        Origin: {
          include: {
            SpellOrigins: spellInclude,
            Lineages: true
          }
        },
        Lineage: {
          include: {
            SpellLineages: spellInclude
          }
        },
        CharacterRunarcanaClass: {
          include: {
            RunarcanaClass: {
              include: {
                SpellClasses: spellInclude
              }
            }
          }
        },
        SpellCharacters: spellInclude,
        CharacterElements: {
          include: {
            Element: {
              include: {
                ElementIngredients: true,
                ElementRecipes: true
              }
            }
          }
        },
        CharacterMisteries: {
          include: {
            Mystery: {
              include: {
                SpellMysteries: spellInclude
              }
            }
          }
        }

      }

    })

    if (charId) characters = characters.filter(character => character.id === charId)

    return {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      characters
    }
  }
}

import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../schemas/User'
import { hash } from 'bcryptjs'
import { SignUpInputData } from '../inputs/SignUpInputData'
import { UserResponse } from '../schemas/UserResponse'
import { IContext } from '../interfaces/IContext'
import { ApiResponse } from '../schemas/ApiResponse'

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
        }
      }
    }
  }
}

@Resolver(User)
export class UserResolver {
  @Query(() => UserResponse, { nullable: true })
  @Authorized()
  async userInfo (@Ctx() ctx: IContext): Promise<UserResponse> {
    const user = await ctx.prisma.user.findUnique({ where: { id: ctx.user.id } })
    if (!user) throw Error('❌ User not found')
    const characters = await ctx.prisma.character.findMany({
      where: { userId: ctx.user.id },
      include: {
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
    return {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      characters
    }
  }

  @Mutation(() => ApiResponse)
  async signUp (@Arg('data') data:SignUpInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    const hashedPassword = await hash(data.password, 10)
    await ctx.prisma.user.create({ data: { ...data, password: hashedPassword } })

    return new ApiResponse('User created')
  }
}

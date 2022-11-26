import { hash, compare } from 'bcryptjs'
import SignInInputData from '../inputs/User/SignInInputData'
import SignUpInputData from '../inputs/User/SignUpInputData'
import { IContext } from '../interfaces/IContext'
import { ApiResponse } from '../schemas/ApiResponse'
import { Auth } from '../schemas/Auth'
import { UserResponse } from '../schemas/User/UserResponse'
import AuthConfig from '../config/auth'
import { sign } from 'jsonwebtoken'
import { characterAddComplements } from '../../utils/characterFuncitons'
import { Character } from '@prisma/client'
export default class UserService {
  public async fetchAll (ctx:IContext, charId?:number): Promise<UserResponse> {
    return this.fetchUserResponse(ctx, ctx.user.id, charId)
  }

  public async create (ctx:IContext, data:SignUpInputData):Promise<ApiResponse> {
    const hashedPassword = await hash(data.password, 10)
    await ctx.prisma.user.create({ data: { ...data, password: hashedPassword } })

    return new ApiResponse('✅ user created')
  }

  public async signIn (ctx:IContext, data:SignInInputData):Promise<Auth> {
    const { username, password } = data

    const user = await ctx.prisma.user.findUnique({ where: { username } })
    if (!user) throw Error('❌ User or Password incorrect')

    const userResponse = await this.fetchUserResponse(ctx, user.id)

    const passwordMatched = await compare(password, user.password)
    if (!passwordMatched) throw Error('❌ User or Password incorrect')

    const { secret, expiresIn } = AuthConfig.jwt
    const token = sign({
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }, secret, { expiresIn })

    return new Auth(token, userResponse)
  }

  private async fetchUserResponse (ctx:IContext, id:number, charId?:number):Promise<UserResponse> {
    const user = await ctx.prisma.user.findUnique({ where: { id } })
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
            }
          }
        }
      }
    }

    const InheritanceInclude = {
      include: {
        Inheritance: true
      }
    }

    const characterQuery = {
      where: { userId: id },
      include: {
        Past: true,
        Region: {
          include: {
            InheritanceRegion: InheritanceInclude
          }
        },
        Origin: {
          include: {
            InheritanceOrigin: InheritanceInclude,
            SpellOrigins: spellInclude
          }
        },
        Lineage: {
          include: {
            SpellLineages: spellInclude,
            InheritanceLineage: InheritanceInclude
          }
        },
        CharacterRunarcanaClasses: {
          include: {
            RunarcanaClass: {
              include: {
                SpellClasses: spellInclude
              }
            }
          }
        },
        CharacterSpells: spellInclude,
        CharacterElements: {
          include: {
            Element: true
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
        },
        CharacterInheritances: InheritanceInclude
      }
    }

    const characters = await ctx.prisma.character.findMany(characterQuery) as Character[]

    const chosenCharacters = charId ? characters.filter(character => character.id === charId) : characters

    const builtCharacters = chosenCharacters.map(character => characterAddComplements(character))

    return {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      characters: builtCharacters
    }
  }
}

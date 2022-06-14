import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../schemas/User'
import { hash } from 'bcryptjs'
import { SignUpInputData } from '../inputs/SignUpInputData'
import { UserResponse } from '../schemas/UserResponse'
import { IContext } from '../interfaces/IContext'
import { ApiResponse } from '../schemas/ApiResponse'

const spellSelect = {
  id: true,
  conjurationId: true,
  durationId: true,
  rangeId: true,
  level: true,
  name: true,
  description: true,
  materials: true,
  createdAt: true,
  updatedAt: true,
  _count: true,
  SpellComponents: {
    select: {
      componentId: true,
      Component: true
    }
  },
  Conjuration: true,
  Duration: true,
  Range: true
}

const spellOriginSelect = {
  spellId: true,
  originId: true,
  createdAt: true,
  updatedAt: true,
  Spell: {
    select: spellSelect
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
      select: {
        id: true,
        userId: true,
        regionId: true,
        lineageId: true,
        pastId: true,
        name: true,
        essence: true,
        expression: true,
        exaltation: true,
        createdAt: true,
        updatedAt: true,
        _count: true,
        Past: true,
        Region: true,
        Origin: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
            _count: true,
            SpellOrigins: {
              select: spellOriginSelect
            },
            Lineages: true
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

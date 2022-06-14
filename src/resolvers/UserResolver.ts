import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../schemas/User'
import { hash } from 'bcryptjs'
import { SignUpInputData } from '../inputs/SignUpInputData'
import { UserResponse } from '../schemas/UserResponse'
import { IContext } from '../interfaces/IContext'

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
        Past: true,
        Origin: true,
        Region: true,
        Linage: true,
        CharacterRunarcanaClass: true,
        SpellCharacters: true,
        CharacterElements: true,
        CharacterMisteries: true
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

  @Mutation(() => UserResponse)
  async signUp (@Arg('data') data:SignUpInputData, @Ctx() ctx:IContext):Promise<UserResponse> {
    const hashedPassword = await hash(data.password, 10)
    const user = await ctx.prisma.user.create({ data: { ...data, password: hashedPassword } })
    const characters = await ctx.prisma.character.findMany({
      where: { userId: ctx.user.id },
      include: {
        Past: true,
        Origin: true,
        Region: true,
        Linage: true,
        CharacterRunarcanaClass: true,
        SpellCharacters: true,
        CharacterElements: true,
        CharacterMisteries: true
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
}

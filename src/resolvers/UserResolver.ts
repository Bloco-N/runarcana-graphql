import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../schemas/User'
import { hash } from 'bcryptjs'
import { SignUpInputData } from '../inputs/SignUpInputData'
import { UserResponse } from '../schemas/UserResponse'
import { IContext } from '../interfaces/IContext'

@Resolver(User)
export class UserResolver {
  @Query((returns) => UserResponse, { nullable: true })
  @Authorized()
  async userInfo (@Ctx() ctx: IContext): Promise<UserResponse> {
    const user = await ctx.prisma.user.findUnique({ where: { id: ctx.user.id } })
    if (!user) throw Error('❌ User not found')
    return {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }

  @Mutation((returns) => UserResponse)
  async signUp (@Arg('data') data:SignUpInputData, @Ctx() ctx:IContext):Promise<UserResponse> {
    const hashedPassword = await hash(data.password, 10)
    const user = await ctx.prisma.user.create({ data: { ...data, password: hashedPassword } })
    return {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    }
  }
}

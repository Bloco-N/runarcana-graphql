import { Arg, Ctx, Mutation, Resolver } from 'type-graphql'
import { Context } from '../context'
import { Auth } from '../schemas/Auth'
import { compare } from 'bcryptjs'
import AuthConfig from '../config/auth'
import { sign } from 'jsonwebtoken'

@Resolver(Auth)
export class SessionResolver {
  @Mutation(returns => Auth)
  async signIn (@Arg('username')username:string, @Arg('password') password:string, @Ctx() ctx:Context) {
    const user = await ctx.prisma.user.findUnique({ where: { username } })
    if (!user) throw Error('❌ User or Password incorrect')

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

    return {
      token,
      user
    }
  }
}

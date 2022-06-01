import { Arg, Authorized, Ctx, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'
import { Context } from '../context'
import { User } from '../schemas/User'
import { hash } from 'bcryptjs'

@InputType()
class SignUpInputData {
  @Field()
    username:string

  @Field()
    nickname:string

  @Field()
    password:string
}

@Resolver(User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  @Authorized()
  async userInfo (@Arg('id') id: number, @Ctx() ctx: Context): Promise<User> {
    const user = await ctx.prisma.user.findUnique({ where: { id } })
    if (!user) throw Error('❌ User not found')
    return user
  }

  @Mutation((returns) => User)
  async signUp (@Arg('data') data:SignUpInputData, @Ctx() ctx:Context):Promise<User> {
    const hashedPassword = await hash(data.password, 10)
    return await ctx.prisma.user.create({ data: { ...data, password: hashedPassword } })
  }

  // @Mutation((returns) => UserWithToken, { nullable: true })
  // async signIn (@Arg('data') data:SignInInputData, @Ctx() ctx:Context):Promise<({user:User ;token:string}) | null> {
  //   const user = await ctx.prisma.user.findUnique({ where: { username: data.username } })
  //   if (!user) return null
  //   const validation = await compare(data.password, user.password)
  //   if (!validation) return null
  //   const tokenCode = uuid()
  //   const token = await ctx.prisma.token.create({
  //     data: { token: tokenCode, user: { connect: { id: user.id } } }
  //   })
  //   return { user, token: token.token }
  // }
}

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
  async userInfo (@Ctx() ctx: Context): Promise<User> {
    const user = await ctx.prisma.user.findUnique({ where: { id: ctx.user.id } })
    if (!user) throw Error('❌ User not found')
    return user
  }

  @Mutation((returns) => User)
  async signUp (@Arg('data') data:SignUpInputData, @Ctx() ctx:Context):Promise<User> {
    const hashedPassword = await hash(data.password, 10)
    return await ctx.prisma.user.create({ data: { ...data, password: hashedPassword } })
  }
}

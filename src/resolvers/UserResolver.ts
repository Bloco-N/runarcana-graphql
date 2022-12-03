import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { User }                                            from '../../prisma/generated/type-graphql'
import SignInInputData                                     from '../inputs/User/SignInInputData'
import SignUpInputData                                     from '../inputs/User/SignUpInputData'
import { IContext }                                        from '../interfaces/IContext'
import { ApiResponse }                                     from '../schemas/ApiResponse'
import { Auth }                                            from '../schemas/Auth'
import UserService                                         from '../services/UserService'

@Resolver(User)
export class UserResolver {

  userService = new UserService()

  @Query(() => User, { nullable: true })
  @Authorized()
  async userInfo(@Ctx() ctx: IContext): Promise<User> {

    return await ctx.prisma.user.findUnique({ where: { id: ctx.user.id } })
  
  }

  @Mutation(() => ApiResponse)
  async signUp(@Arg('data') data: SignUpInputData, @Ctx() ctx: IContext): Promise<ApiResponse> {

    await this.userService.create(ctx, data)
    return new ApiResponse('✅ user created')
  
  }

  @Mutation(() => Auth)
  async signIn(@Arg('data') data: SignInInputData, @Ctx() ctx: IContext): Promise<Auth> {

    return await this.userService.signIn(ctx, data)
  
  }

}

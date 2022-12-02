import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import SignUpInputData from '../inputs/User/SignUpInputData'
import { IContext } from '../interfaces/IContext'
import { ApiResponse } from '../schemas/ApiResponse'
import UserService from '../services/UserService'
import { Auth } from '../schemas/Auth'
import SignInInputData from '../inputs/User/SignInInputData'
import { User } from '../../prisma/generated/type-graphql'

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

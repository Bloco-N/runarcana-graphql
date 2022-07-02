import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../schemas/User'
import SignUpInputData from '../inputs/User/SignUpInputData'
import { UserResponse } from '../schemas/UserResponse'
import { IContext } from '../interfaces/IContext'
import { ApiResponse } from '../schemas/ApiResponse'
import UserService from '../services/UserService'

@Resolver(User)
export class UserResolver {
  userService = new UserService()

  @Query(() => UserResponse, { nullable: true })
  @Authorized()
  async userInfo (@Ctx() ctx: IContext, @Arg('charId', { nullable: true }) charId?:number): Promise<UserResponse> {
    const user = await this.userService.fetchAll(ctx, charId)
    return user
  }

  @Mutation(() => ApiResponse)
  async signUp (@Arg('data') data:SignUpInputData, @Ctx() ctx:IContext):Promise<ApiResponse> {
    const response = await this.userService.create(ctx, data)
    return response
  }
}

import { Field, ObjectType } from 'type-graphql'
import { IAuth } from '../interfaces/IAuth'
import { UserResponse } from './User/UserResponse'
@ObjectType()
export class Auth implements IAuth {
  constructor (token:string, user:UserResponse) {
    this.token = token
    this.user = user
  }

  @Field({ nullable: false })
    token: string

  @Field(() => UserResponse, { nullable: false })
    user: UserResponse
}

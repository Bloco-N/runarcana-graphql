import { Field, ObjectType } from 'type-graphql'
import { IAuth } from '../interfaces/IAuth'
import { UserResponse } from './UserResponse'
@ObjectType()
export class Auth implements IAuth {
  @Field({ nullable: false })
    token: string

  @Field((type) => UserResponse, { nullable: false })
    user: UserResponse
}

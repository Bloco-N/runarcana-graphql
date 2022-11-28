import { Field, ObjectType } from 'type-graphql'
import { User } from '../../prisma/generated/type-graphql'
import { IAuth } from '../interfaces/IAuth'
@ObjectType()
export class Auth implements IAuth {
  constructor (token:string, user:User) {
    this.token = token
    this.user = user
  }

  @Field({ nullable: false })
    token: string

  @Field(() => User, { nullable: false })
    user: User
}

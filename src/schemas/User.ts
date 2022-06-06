import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class User {
  @Field(() => Int)
    id: number

  @Field(() => String)
    username:string

  @Field(() => String)
    nickname:string

  @Field(() => String)
    password:string

  @Field(() => Date)
    createdAt:Date

  @Field(() => Date)
    updatedAt:Date
}

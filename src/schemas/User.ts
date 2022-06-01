import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class User {
  @Field((type) => Int)
    id: number

  @Field((type) => String)
    username:string

  @Field((type) => String)
    nickname:string

  @Field((type) => String)
    password:string

  @Field((type) => Date)
    createdAt:Date

  @Field((type) => Date)
    updatedAt:Date
}

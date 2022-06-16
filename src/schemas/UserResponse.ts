import { Field, ObjectType, Int } from 'type-graphql'
import { Character } from './Character'

@ObjectType()
export class UserResponse {
  @Field(() => Int)
    id: number

  @Field(() => String)
    username:string

  @Field(() => String)
    nickname:string

  @Field(() => Date)
    createdAt:Date

  @Field(() => Date)
    updatedAt:Date

  @Field(() => [Character])
    characters: Character[]
}

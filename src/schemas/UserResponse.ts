import { Field, ObjectType, Int } from 'type-graphql'
import { Character } from './Character'

@ObjectType()
export class UserResponse {
  @Field((type) => Int)
    id: number

  @Field((type) => String)
    username:string

  @Field((type) => String)
    nickname:string

  @Field((type) => Date)
    createdAt:Date

  @Field((type) => Date)
    updatedAt:Date

  @Field((type) => [Character])
    characters: Character[]
}

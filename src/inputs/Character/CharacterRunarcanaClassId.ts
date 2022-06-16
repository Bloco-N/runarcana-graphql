import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterRunarcanaClassId {
  @Field()
    runarcanaClassId: number

  @Field()
    characterId: number
}

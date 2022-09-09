import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterAddClassInputData {
  @Field()
    characterId:number

  @Field()
    runarcanaClassId:number
}

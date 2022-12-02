import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterLevelUpInputData {

  @Field()
    characterId: number

  @Field()
    runarcanaClassId: number

  @Field()
    hitDie: number

}

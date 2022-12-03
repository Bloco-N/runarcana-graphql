import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterLevelUpInputData {

  @Field()
    runarcanaClassId: number

  @Field()
    roll: number

}

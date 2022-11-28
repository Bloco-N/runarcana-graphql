import { Field, InputType } from 'type-graphql'
import CharacterInputData from './CharacterInputData'

@InputType()
export default class CharacterCreateInputData {
  @Field()
    runarcanaClassId:number

  @Field(() => CharacterInputData)
    charData : CharacterInputData
}

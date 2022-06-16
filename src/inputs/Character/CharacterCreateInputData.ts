import { Field, InputType } from 'type-graphql'
import CharacterInputData from './CharacterInputData'

@InputType()
export default class CharacterCreateInputData extends CharacterInputData {
  @Field()
    runarcanaClassId:number
}

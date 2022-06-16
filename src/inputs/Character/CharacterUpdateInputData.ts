import { Field, InputType } from 'type-graphql'
import CharacterInputData from './CharacterInputData'

@InputType()
export default class CharacterUpdateInputData extends CharacterInputData {
  @Field()
    id:number
}

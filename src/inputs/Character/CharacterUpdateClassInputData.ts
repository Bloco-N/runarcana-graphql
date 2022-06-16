import { Field, InputType } from 'type-graphql'
import CharacterRunarcanaClassId from './CharacterRunarcanaClassId'

@InputType()
export default class CharacterUpdateClassInputData {
  @Field(() => CharacterRunarcanaClassId)
    id:CharacterRunarcanaClassId

  @Field()
    runarcanaClassId:number
}

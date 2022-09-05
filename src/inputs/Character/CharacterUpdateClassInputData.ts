import { Field, InputType } from 'type-graphql'
import CharacterIdPair from './CharacterIdPair'

@InputType()
export default class CharacterUpdateClassInputData {
  @Field(() => CharacterIdPair)
    id:CharacterIdPair

  @Field()
    runarcanaClassId:number

  @Field()
    level:number
}

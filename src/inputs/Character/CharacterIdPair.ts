import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterIdPair {
  @Field()
    otherId: number

  @Field()
    characterId:number
}

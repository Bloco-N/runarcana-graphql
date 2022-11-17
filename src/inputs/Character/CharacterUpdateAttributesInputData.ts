import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterUpdateAttributesInputData {
  @Field()
    id:number

  @Field()
    strength:number

  @Field()
    dexterity:number

  @Field()
    constitution:number

  @Field()
    intelligence:number

  @Field()
    wisdom:number

  @Field()
    charisma:number
}

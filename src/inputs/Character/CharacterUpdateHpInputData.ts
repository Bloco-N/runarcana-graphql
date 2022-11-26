import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterUpdateHpInputData {
  @Field()
    characterId: number

  @Field({ nullable: true })
    currentHp?: number

  @Field({ nullable: true })
    bonusHp?:number
}

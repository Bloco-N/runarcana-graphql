import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterUpdateProficiencyInputData {
  @Field()
    id:number

  @Field()
    acrobatics: string

  @Field()
    arcana: string

  @Field()
    athletics: string

  @Field()
    performance: string

  @Field()
    deception: string

  @Field()
    stealth: string

  @Field()
    history: string

  @Field()
    intimidation: string

  @Field()
    investigation: string

  @Field()
    insight: string

  @Field()
    animalHandling: string

  @Field()
    medicine: string

  @Field()
    nature: string

  @Field()
    perception: string

  @Field()
    persuasion: string

  @Field()
    sleightOfHand: string

  @Field()
    religion: string

  @Field()
    survival: string

  @Field()
    tecnology: string

  @Field()
    strengthSavingThrow: string

  @Field()
    dexteritySavingThrow: string

  @Field()
    constitutionSavingThrow: string

  @Field()
    intelligenceSavingThrow: string

  @Field()
    wisdomSavingThrow: string

  @Field()
    charismaSavingThrow: string
}

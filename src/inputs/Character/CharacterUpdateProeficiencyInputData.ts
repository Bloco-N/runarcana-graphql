import { Field, InputType } from 'type-graphql'
import { proficiency } from '@prisma/client'

@InputType()
export default class CharacterUpdateProficiencyInputData {
  @Field()
    id:number

  @Field({ nullable: true })
    acrobatics?: proficiency

  @Field({ nullable: true })
    arcana?: proficiency

  @Field({ nullable: true })
    athletics?: proficiency

  @Field({ nullable: true })
    performance?: proficiency

  @Field({ nullable: true })
    deception?: proficiency

  @Field({ nullable: true })
    stealth?: proficiency

  @Field({ nullable: true })
    history?: proficiency

  @Field({ nullable: true })
    intimidation?: proficiency

  @Field({ nullable: true })
    investigation?: proficiency

  @Field({ nullable: true })
    insight?: proficiency

  @Field({ nullable: true })
    animalHandling?: proficiency

  @Field({ nullable: true })
    medicine?: proficiency

  @Field({ nullable: true })
    nature?: proficiency

  @Field({ nullable: true })
    perception?: proficiency

  @Field({ nullable: true })
    persuasion?: proficiency

  @Field({ nullable: true })
    sleightOfHand?: proficiency

  @Field({ nullable: true })
    religion?: proficiency

  @Field({ nullable: true })
    survival?: proficiency

  @Field({ nullable: true })
    tecnology?: proficiency

  @Field({ nullable: true })
    strengthSavingThrow?: proficiency

  @Field({ nullable: true })
    dexteritySavingThrow?: proficiency

  @Field({ nullable: true })
    constitutionSavingThrow?: proficiency

  @Field({ nullable: true })
    intelligenceSavingThrow?: proficiency

  @Field({ nullable: true })
    wisdomSavingThrow?: proficiency

  @Field({ nullable: true })
    charismaSavingThrow?: proficiency
}

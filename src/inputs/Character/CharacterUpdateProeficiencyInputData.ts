import { Field, InputType } from 'type-graphql'
import { proficiency } from '@prisma/client'

@InputType()
export default class CharacterUpdateProficiencyInputData {
  @Field()
    id:number

  @Field(() => String, { nullable: true })
    acrobatics?: proficiency

  @Field(() => String, { nullable: true })
    arcana?: proficiency

  @Field(() => String, { nullable: true })
    athletics?: proficiency

  @Field(() => String, { nullable: true })
    performance?: proficiency

  @Field(() => String, { nullable: true })
    deception?: proficiency

  @Field(() => String, { nullable: true })
    stealth?: proficiency

  @Field(() => String, { nullable: true })
    history?: proficiency

  @Field(() => String, { nullable: true })
    intimidation?: proficiency

  @Field(() => String, { nullable: true })
    investigation?: proficiency

  @Field(() => String, { nullable: true })
    insight?: proficiency

  @Field(() => String, { nullable: true })
    animalHandling?: proficiency

  @Field(() => String, { nullable: true })
    medicine?: proficiency

  @Field(() => String, { nullable: true })
    nature?: proficiency

  @Field(() => String, { nullable: true })
    perception?: proficiency

  @Field(() => String, { nullable: true })
    persuasion?: proficiency

  @Field(() => String, { nullable: true })
    sleightOfHand?: proficiency

  @Field(() => String, { nullable: true })
    religion?: proficiency

  @Field(() => String, { nullable: true })
    survival?: proficiency

  @Field(() => String, { nullable: true })
    tecnology?: proficiency

  @Field(() => String, { nullable: true })
    strengthSavingThrow?: proficiency

  @Field(() => String, { nullable: true })
    dexteritySavingThrow?: proficiency

  @Field(() => String, { nullable: true })
    constitutionSavingThrow?: proficiency

  @Field(() => String, { nullable: true })
    intelligenceSavingThrow?: proficiency

  @Field(() => String, { nullable: true })
    wisdomSavingThrow?: proficiency

  @Field(() => String, { nullable: true })
    charismaSavingThrow?: proficiency
}

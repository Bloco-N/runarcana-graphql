import { Field, InputType } from "type-graphql";
import { proficiency } from '.prisma/client'

@InputType()
export default class CharacterUpdateProficiencyInputData{

  @Field()
  id:number

  @Field()
  acrobatics: proficiency

  @Field()
  arcana: proficiency

  @Field()
  performance: proficiency

  @Field()
  deception: proficiency

  @Field()
  stealth: proficiency

  @Field()
  history: proficiency

  @Field()
  intimidation: proficiency

  @Field()
  animalHandling: proficiency

  @Field()
  medicine: proficiency

  @Field()
  nature: proficiency

  @Field()
  perception: proficiency

  @Field()
  persuasion: proficiency

  @Field()
  sleightOfHand: proficiency

  @Field()
  religion: proficiency

  @Field()
  survival: proficiency

  @Field()
  tecnology: proficiency

  @Field()
  strengthSavingThrow: proficiency

  @Field()
  dexteritySavingThrow: proficiency

  @Field()
  constitutionSavingThrow: proficiency

  @Field()
  intelligenceSavingThrow: proficiency

  @Field()
  wisdomSavingThrow: proficiency

  @Field()
  charismaSavingThrow: proficiency

}
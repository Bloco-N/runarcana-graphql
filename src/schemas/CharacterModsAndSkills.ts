import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CharacterModsAndSkills{

  @Field()
    strengthMod: number
  
  @Field()
    dexterityMod: number

  @Field()
    constitutionMod: number

  @Field()
    intelligenceMod: number

  @Field()
    wisdomMod: number

  @Field()
    charismaMod: number

  @Field()
    acrobaticsValue: number
  
  @Field()
    arcanaValue: number

  @Field()
  athleticsValue: number

  @Field()
    performanceValue: number
    
  @Field()
    deceptionValue: number

  @Field()
    stealthValue: number

  @Field()
    historyValue: number

  @Field()
    intimidationValue: number

  @Field()
    animalHandlingValue: number

  @Field()
    medicineValue: number

  @Field()
    natureValue: number

  @Field()
    perceptionValue: number

  @Field()
    persuasionValue: number

  @Field()
    sleightOfHandValue: number

  @Field()
    religionValue: number

  @Field()
    survivalValue: number

  @Field()
    tecnologyValue: number

  @Field()
    strengthSavingThrowValue: number

  @Field()
    dexteritySavingThrowValue: number

  @Field()
    constitutionSavingThrowValue: number
  
  @Field()
    intelligenceSavingThrowValue: number

  @Field()
    wisdomSavingThrowValue: number

  @Field()
    charismaSavingThrowValue: number

}
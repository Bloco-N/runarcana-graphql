import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export default class LevelUpData {
  @Field()
    characterLevel?: number

  @Field()
    characterAdditionalInfos?: string

  @Field()
    characterProgress?: string

  @Field()
    characterClassLevel?: number

  @Field()
    classProgress?: string

  @Field()
    hitDieRoll?: number
}

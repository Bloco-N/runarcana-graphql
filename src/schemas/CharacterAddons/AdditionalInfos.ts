import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export default class AdditionalInfos {
  @Field()
    ClassHpBase: number
}

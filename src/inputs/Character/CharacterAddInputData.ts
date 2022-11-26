import { Field, InputType } from 'type-graphql'

@InputType()
export default class CharacterAddInputData {
  @Field()
    id: number

  @Field()
    InheritanceId?: number

  @Field()
    RunarcanaClassId?:number

  @Field()
    SpellId?: number
}

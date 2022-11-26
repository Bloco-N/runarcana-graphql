import { Field, ObjectType } from 'type-graphql'
import { Spell } from './Spell'

@ObjectType()
export class SpellResponse {
  @Field(() => [Spell])
    spells: Spell[]
}

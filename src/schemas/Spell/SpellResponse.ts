import { Field, ObjectType } from 'type-graphql'
import { Spell } from '../../../prisma/generated/type-graphql'

@ObjectType()
export class SpellResponse {
  @Field(() => [Spell])
    spells: Spell[]
}

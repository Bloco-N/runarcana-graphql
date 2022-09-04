import { Mystery as PrismaMystery } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellMystery } from './relations/SpellMistery'

@ObjectType()
export class Mystery extends PrismaMystery {
  @Field(() => SpellMystery)
    SpellMysteries?: SpellMystery[]
}

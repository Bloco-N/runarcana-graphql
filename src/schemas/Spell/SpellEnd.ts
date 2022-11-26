import { Spell as PrismaSpell, Range, Conjuration, Duration } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellComponent } from './SpellRelations/SpellComponent'

@ObjectType()
export class SpellEnd extends PrismaSpell {
  @Field()
    Conjuration?: Conjuration

  @Field()
    Duration?: Duration

  @Field()
    Range?: Range

  @Field(() => [SpellComponent])
    SpellComponents?: SpellComponent[]
}

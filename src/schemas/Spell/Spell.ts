import { Spell as PrismaSpell, Range, Conjuration, Duration } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellComponent } from './SpellRelations/SpellComponent'
import { SpellLineage } from './SpellRelations/SpellLineage'
import { SpellMystery } from './SpellRelations/SpellMistery'
import { SpellOrigin } from './SpellRelations/SpellOrigin'

@ObjectType()
export class Spell extends PrismaSpell {
  @Field()
    Conjuration?: Conjuration

  @Field()
    Duration?: Duration

  @Field()
    Range?: Range

  @Field(() => [SpellComponent])
    SpellComponents?: SpellComponent[]

  @Field(() => [SpellMystery])
    SpellMysteries?: SpellMystery[]

  @Field(() => [SpellLineage])
    SpellLineages?: SpellLineage[]

  @Field(() => [SpellOrigin])
    SpellOrigins?: SpellOrigin[]
}

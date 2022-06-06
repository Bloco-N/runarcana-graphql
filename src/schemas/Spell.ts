import { Spell as PrismaSpell, Range, Conjuration, Duration } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellComponent } from './relations/SpellComponent'

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
}

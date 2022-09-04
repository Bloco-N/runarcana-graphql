import { Lineage as PrismaLineage } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellLineage } from './relations/SpellLineage'
import { InheritanceLineage } from './relations/InheritanceLineage'

@ObjectType()
export class Lineage extends PrismaLineage {
  @Field(() => [SpellLineage])
    SpellLineages?: SpellLineage[]

  @Field(() => [InheritanceLineage])
    InheritanceLineage?: InheritanceLineage[]
}

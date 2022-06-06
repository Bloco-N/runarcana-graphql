import { Lineage as PrismaLineage } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellLineage } from './SpellLineage'

@ObjectType()
export class Lineage extends PrismaLineage {
  @Field(() => [SpellLineage])
    SpellLineages?: SpellLineage[]
}

import { SpellLineage as PrismaSpellLineage } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Lineage } from '../../Lineage/Lineage'

@ObjectType()
export class SpellLineage extends PrismaSpellLineage {
  @Field()
    Lineage?: Lineage
}

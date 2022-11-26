import { Lineage as PrismaLineage } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { LineageInheritance } from './LineageInheritance'
import { LineageSpell } from './LineageSpells'

@ObjectType()
export class Lineage extends PrismaLineage {
  @Field(() => [LineageSpell])
    LineageSpells?: LineageSpell[]

  @Field(() => [LineageInheritance])
    LineageInheritances?: LineageInheritance[]
}

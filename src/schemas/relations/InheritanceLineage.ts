import { InheritanceLineage as PrismaInheritanceLineage, Inheritance } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Lineage } from '../Lineage'

@ObjectType()
export class InheritanceLineage extends PrismaInheritanceLineage {
  @Field(() => Lineage)
    Lineage: Lineage

  @Field(() => Inheritance)
    Inheritance: Inheritance
}

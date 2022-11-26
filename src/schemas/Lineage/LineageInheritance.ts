import { InheritanceLineage as PrismaInheritanceLineage, Inheritance } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class LineageInheritance extends PrismaInheritanceLineage {
  @Field(() => Inheritance)
    Inheritance: Inheritance
}

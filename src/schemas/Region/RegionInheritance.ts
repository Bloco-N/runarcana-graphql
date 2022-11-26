import { InheritanceRegion as PrismaInheritanceRegion, Inheritance } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class RegionInheritance extends PrismaInheritanceRegion {
  @Field(() => Inheritance)
    Inheritance: Inheritance
}

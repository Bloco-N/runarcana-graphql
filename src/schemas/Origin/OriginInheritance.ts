import { InheritanceOrigin as PrismaInheritanceOrigin, Inheritance } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class OriginInheritance extends PrismaInheritanceOrigin {
  @Field(() => Inheritance)
    Inheritance: Inheritance
}

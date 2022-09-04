import { InheritanceOrigin as PrismaInheritanceOrigin, Inheritance } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Origin } from '../Origin'

@ObjectType()
export class InheritanceOrigin extends PrismaInheritanceOrigin {
  @Field(() => Origin)
    Origin: Origin

  @Field(() => Inheritance)
    Inheritance: Inheritance
}

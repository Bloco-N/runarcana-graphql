import { RunarcanaClass, SpellClass as PrismaSpellClass } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class SpellClass extends PrismaSpellClass {
  @Field()
    RunarcanaClass?: RunarcanaClass
}

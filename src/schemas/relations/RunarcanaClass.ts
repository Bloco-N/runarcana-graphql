import { RunarcanaClass as PrismaRunarcanaClass } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellClass } from './SpellClass'

@ObjectType()
export class RunarcanaClass extends PrismaRunarcanaClass {
  @Field(() => [SpellClass])
    SpellClasses?: SpellClass[]
}

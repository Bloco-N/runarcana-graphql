import { RunarcanaClass as PrismaRunarcanaClass } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { RunarcanaClassSpell } from './RunarcanaClassSpell'

@ObjectType()
export class RunarcanaClass extends PrismaRunarcanaClass {
  @Field(() => [RunarcanaClassSpell])
    RunarcanaClassSpells?: RunarcanaClassSpell[]
}

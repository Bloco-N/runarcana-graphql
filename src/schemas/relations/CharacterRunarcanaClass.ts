import { CharacterRunarcanaClass as PrismaCharacterRunarcanaClass } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { RunarcanaClass } from './RunarcanaClass'

@ObjectType()
export class CharacterRunarcanaClass extends PrismaCharacterRunarcanaClass {
  @Field()
    RunarcanaClass?: RunarcanaClass
}

import { Field, ObjectType } from 'type-graphql'
import { RunarcanaClass } from './RunarcanaClass'

@ObjectType()
export class RClassResponse {
  @Field(() => [RunarcanaClass])
    runarcanaClasses : RunarcanaClass[]
}

import { Field, ObjectType } from 'type-graphql'
import { RunarcanaClass } from './relations/RunarcanaClass'

@ObjectType()
export class RClassResponse {
  @Field(() => [RunarcanaClass])
    runarcanaClasses : RunarcanaClass[]
}

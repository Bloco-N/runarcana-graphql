import { Field, ObjectType } from 'type-graphql'
import { RunarcanaClass } from '../../../prisma/generated/type-graphql'

@ObjectType()
export class RClassResponse {
  @Field(() => [RunarcanaClass])
    runarcanaClasses : RunarcanaClass[]
}

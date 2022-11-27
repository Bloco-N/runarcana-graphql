import { Field, ObjectType } from 'type-graphql'
import { Origin } from '../../../prisma/generated/type-graphql'

@ObjectType()
export class OriginResponse {
  @Field(() => [Origin])
    origins : Origin[]
}

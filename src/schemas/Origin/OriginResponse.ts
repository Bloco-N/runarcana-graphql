import { Field, ObjectType } from 'type-graphql'
import { Origin } from './Origin'

@ObjectType()
export class OriginResponse {
  @Field(() => [Origin])
    origins : Origin[]
}

import { Field, ObjectType } from 'type-graphql'
import { Past } from '@generated/type-graphql'

@ObjectType()
export class PastResponse {
  @Field(() => [Past])
    pasts: Past[]
}

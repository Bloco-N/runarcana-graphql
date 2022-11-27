import { Field, ObjectType } from 'type-graphql'
import { Region } from '../../../prisma/generated/type-graphql'

@ObjectType()
export class RegionResponse {
  @Field(() => [Region])
    regions: Region[]
}

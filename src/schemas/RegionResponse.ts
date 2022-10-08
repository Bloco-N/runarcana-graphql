import { Field, ObjectType } from 'type-graphql'
import { Region } from './Region'

@ObjectType()
export class RegionResponse {
  @Field(() => [Region])
    regions: Region[]
}

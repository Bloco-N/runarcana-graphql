import { Region as PrismaRegion } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { InheritanceRegion } from './relations/InheritanceRegion'

@ObjectType()
export class Region extends PrismaRegion {
  @Field(() => [InheritanceRegion])
    InheritanceRegion?: InheritanceRegion[]
}

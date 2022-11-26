import { Region as PrismaRegion } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { RegionInheritance } from './RegionInheritance'

@ObjectType()
export class Region extends PrismaRegion {
  @Field(() => [RegionInheritance])
    RegionInheritances?: RegionInheritance[]
}

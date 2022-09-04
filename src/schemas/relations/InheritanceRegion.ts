import { InheritanceRegion as PrismaInheritanceRegion, Inheritance } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Region } from '../Region'

@ObjectType()
export class InheritanceRegion extends PrismaInheritanceRegion {
  @Field(() => Region)
    Region: Region

  @Field(() => Inheritance)
    Inheritance: Inheritance
}

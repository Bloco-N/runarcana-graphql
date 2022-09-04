import { Origin as PrismaOrigin } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellOrigin } from './relations/SpellOrigin'
import { Lineage } from './Lineage'
import { InheritanceOrigin } from './relations/InheritanceOrigin'

@ObjectType()
export class Origin extends PrismaOrigin {
  @Field(() => [SpellOrigin])
    SpellOrigins?: SpellOrigin[]

  @Field(() => [Lineage])
    Lineages?: Lineage[]

  @Field(() => [InheritanceOrigin])
    InheritanceOrigin?: InheritanceOrigin[]
}

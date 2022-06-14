import { Origin as PrismaOrigin } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellOrigin } from './SpellOrigin'
import { Lineage } from './Lineage'

@ObjectType()
export class Origin extends PrismaOrigin {
  @Field(() => [SpellOrigin])
    SpellOrigins?: SpellOrigin[]

  @Field(() => [Lineage])
    Lineages?: Lineage[]
}

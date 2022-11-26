import { Origin as PrismaOrigin } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Lineage } from '../Lineage/Lineage'
import { OriginInheritance } from './OriginInheritance'
import { OriginSpell } from './OriginSpell'

@ObjectType()
export class Origin extends PrismaOrigin {
  @Field(() => [Lineage])
    Lineages?: Lineage[]

  @Field(() => [OriginSpell])
    OriginSpells?: OriginSpell[]

  @Field(() => [OriginInheritance])
    OriginInheritances?: OriginInheritance[]
}

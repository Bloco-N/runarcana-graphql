import { SpellLineage as PrismaSpellLineage } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Spell } from '../Spell'

@ObjectType()
export class SpellLineage extends PrismaSpellLineage {
  @Field()
    Spell?: Spell
}

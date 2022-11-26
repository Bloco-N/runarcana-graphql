import { SpellLineage as PrismaSpellLineage } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellEnd } from '../Spell/SpellEnd'

@ObjectType()
export class LineageSpell extends PrismaSpellLineage {
  @Field()
    Spell?: SpellEnd
}

import { SpellMystery as PrismaSpellMystery } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellEnd } from '../Spell/SpellEnd'

@ObjectType()
export class MysterySpell extends PrismaSpellMystery {
  @Field(() => SpellEnd)
    Spell?: SpellEnd
}

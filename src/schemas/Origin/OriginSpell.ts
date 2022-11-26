import { SpellOrigin as PrismaSpellOrigin } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellEnd } from '../Spell/SpellEnd'

@ObjectType()
export class OriginSpell extends PrismaSpellOrigin {
  @Field(() => SpellEnd)
    Spell?: SpellEnd
}

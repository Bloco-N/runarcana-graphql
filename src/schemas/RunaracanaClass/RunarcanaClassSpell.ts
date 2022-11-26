import { SpellClass as PrismaSpellClass } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellEnd } from '../Spell/SpellEnd'

@ObjectType()
export class RunarcanaClassSpell extends PrismaSpellClass {
  @Field()
    Spell?: SpellEnd
}

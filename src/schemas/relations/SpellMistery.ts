import { SpellMystery as PrismaSpellMystery } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Spell } from '../Spell'

@ObjectType()
export class SpellMystery extends PrismaSpellMystery {
  @Field()
    Spell?: Spell
}

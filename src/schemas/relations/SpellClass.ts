import { SpellClass as PrismaSpellClass } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Spell } from '../Spell'

@ObjectType()
export class SpellClass extends PrismaSpellClass {
  @Field()
    Spell?: Spell
}

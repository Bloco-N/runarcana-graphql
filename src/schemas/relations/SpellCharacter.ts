import { SpellCharacter as PrismaSpellCharacter } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Spell } from '../Spell'
@ObjectType()
export class SpellCharacter extends PrismaSpellCharacter {
  @Field()
    Spell?: Spell
}

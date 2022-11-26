import { SpellCharacter as PrismaSpellCharacter } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { SpellEnd } from '../../Spell/SpellEnd'
@ObjectType()
export class CharacterSpell extends PrismaSpellCharacter {
  @Field()
    Spell?: SpellEnd
}

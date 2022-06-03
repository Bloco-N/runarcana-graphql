import { Field, ObjectType } from 'type-graphql'
import {
  Character as PrismaCharacter,
  CharacterElement,
  Linage,
  Origin,
  Past,
  Region,
  RunarcanaClass,
  SpellCharacter,
  Spell,
  Element
} from '@generated/type-graphql'

@ObjectType()
export class Character extends PrismaCharacter {
  @Field()
    Past?: Past

  @Field()
    Region?: Region

  @Field()
    Origin?: Origin

  @Field()
    Linage?: Linage

  @Field()
    RunarcanaClass?: RunarcanaClass

  @Field((type) => [Spell])
    spellCharacters?: SpellCharacter[]

  @Field((type) => [Element])
    characterElements?: CharacterElement[]
}

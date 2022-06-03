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
  Spell
} from '@generated/type-graphql'
import { Element } from './Element'

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
    SpellCharacters?: SpellCharacter[]

  @Field((type) => [Element])
    CharacterElements?: CharacterElement[]
}

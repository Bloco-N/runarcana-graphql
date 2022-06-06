import { Field, ObjectType } from 'type-graphql'
import {
  Character as PrismaCharacter,
  CharacterElement,
  Past,
  Region,
  SpellCharacter
} from '@generated/type-graphql'
import { RunarcanaClass } from './relations/RunarcanaClass'
import { Origin } from './relations/Origin'
import { Lineage } from './relations/Lineage'
import { CharacterMistery } from './relations/CharacterMistery'

@ObjectType()
export class Character extends PrismaCharacter {
  @Field()
    Past?: Past

  @Field()
    Region?: Region

  @Field()
    Origin?: Origin

  @Field()
    Lineage?: Lineage

  @Field(() => RunarcanaClass)
    RunarcanaClass?: RunarcanaClass

  @Field(() => [SpellCharacter])
    SpellCharacters?: SpellCharacter[]

  @Field(() => [CharacterElement])
    CharacterElements?: CharacterElement[]

  @Field(() => [CharacterMistery])
    CharacterMisteries?: CharacterMistery[]
}

import { Field, ObjectType } from 'type-graphql'
import {
  Character as PrismaCharacter,
  Past,
  Region
} from '@generated/type-graphql'
import { RunarcanaClass } from './relations/RunarcanaClass'
import { Origin } from './relations/Origin'
import { Lineage } from './relations/Lineage'
import { SpellCharacter } from './relations/SpellCharacter'
import { CharacterMistery } from './relations/CharacterMistery'
import { CharacterElement } from './relations/CharacterElement'

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

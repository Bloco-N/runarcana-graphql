import { Field, ObjectType } from 'type-graphql'
import {
  Character as PrismaCharacter,
  Past
} from '@generated/type-graphql'
import { Origin } from './Origin'
import { Lineage } from './Lineage'
import { Region } from './Region'
import { SpellCharacter } from './relations/SpellCharacter'
import { CharacterMistery } from './relations/CharacterMistery'
import { CharacterElement } from './relations/CharacterElement'
import { CharacterRunarcanaClass } from './relations/CharacterRunarcanaClass'
import { CharacterInheritance } from './relations/CharacterInheritance'

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

  @Field(() => [CharacterRunarcanaClass])
    CharacterRunarcanaClass?: CharacterRunarcanaClass[]

  @Field(() => [SpellCharacter])
    SpellCharacters?: SpellCharacter[]

  @Field(() => [CharacterElement])
    CharacterElements?: CharacterElement[]

  @Field(() => [CharacterMistery])
    CharacterMisteries?: CharacterMistery[]

  @Field(() => [CharacterInheritance])
    CharacterInheritance?: CharacterInheritance[]
}

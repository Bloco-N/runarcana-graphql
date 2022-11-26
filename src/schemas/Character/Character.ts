import { Field, ObjectType } from 'type-graphql'
import {
  Character as PrismaCharacter,
  Past
} from '@generated/type-graphql'
import { Region } from '../Region/Region'
import { Origin } from '../Origin/Origin'
import { Lineage } from '../Lineage/Lineage'
import { CharacterRunarcanaClass } from './CharacterRelations/CharacterRunarcanaClass'
import { CharacterSpell } from './CharacterRelations/CharacterSpell'
import { CharacterElement } from './CharacterRelations/CharacterElement'
import { CharacterMistery } from './CharacterRelations/CharacterMistery'
import { CharacterInheritance } from './CharacterRelations/CharacterInheritance'
import { Characteristic } from './CharacterComplements/Characteristic'

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
    CharacterRunarcanaClasses?: CharacterRunarcanaClass[]

  @Field(() => [CharacterSpell])
    CharacterSpells?: CharacterSpell[]

  @Field(() => [CharacterElement])
    CharacterElements?: CharacterElement[]

  @Field(() => [CharacterMistery])
    CharacterMisteries?: CharacterMistery[]

  @Field(() => [CharacterInheritance])
    CharacterInheritances?: CharacterInheritance[]

  @Field(() => [Characteristic])
    Characteristics?: Characteristic[]
}

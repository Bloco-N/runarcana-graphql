import { CharacterElement as PrismaCharacterElement } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Element } from '../Element'

@ObjectType()
export class CharacterElement extends PrismaCharacterElement {
  @Field()
    Element?: Element
}

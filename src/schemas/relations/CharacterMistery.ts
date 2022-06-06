import { CharacterMistery as PrismaCharacterMistery } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Mystery } from './Mistery'

@ObjectType()
export class CharacterMistery extends PrismaCharacterMistery {
  @Field()
    Mystery?: Mystery
}

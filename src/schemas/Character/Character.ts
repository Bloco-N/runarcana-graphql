import { Field, ObjectType } from 'type-graphql'
import { Character as PrismaCharacter } from '../../../prisma/generated/type-graphql'
import { Characteristic } from './CharacterComplements/Characteristic'

@ObjectType()
export class Character extends PrismaCharacter {
  @Field(() => [Characteristic])
    Characteristics?: Characteristic[]
}

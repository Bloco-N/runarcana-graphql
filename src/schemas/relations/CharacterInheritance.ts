import { CharacterInheritance as PrismaCharacterInheritance, Inheritance } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class CharacterInheritance extends PrismaCharacterInheritance {
  @Field()
    Inheritance?: Inheritance
}

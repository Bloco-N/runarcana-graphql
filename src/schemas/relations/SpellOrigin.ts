import { SpellOrigin as PrismaSpellOrigin } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Spell } from '../Spell'

@ObjectType()
export class SpellOrigin extends PrismaSpellOrigin {
  @Field(() => Spell)
    Spell?: Spell
}

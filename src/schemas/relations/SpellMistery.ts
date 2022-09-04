import { SpellMystery as PrismaSpellMystery } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Spell } from '../Spell'
import { Mystery } from '../Mistery'

@ObjectType()
export class SpellMystery extends PrismaSpellMystery {
  @Field(() => Spell)
    Spell?: Spell

  @Field(() => Mystery)
    Mystery?: Mystery
}

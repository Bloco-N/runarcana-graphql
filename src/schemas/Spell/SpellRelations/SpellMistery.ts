import { SpellMystery as PrismaSpellMystery } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Mystery } from '../../Mystery/Mistery'

@ObjectType()
export class SpellMystery extends PrismaSpellMystery {
  @Field(() => Mystery)
    Mystery?: Mystery
}

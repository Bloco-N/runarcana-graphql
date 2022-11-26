import { Mystery as PrismaMystery } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { MysterySpell } from './MisterySpell'

@ObjectType()
export class Mystery extends PrismaMystery {
  @Field(() => MysterySpell)
    MysterySpells?: MysterySpell[]
}

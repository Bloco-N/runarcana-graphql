import { Component, SpellComponent as PrismaSpellComponent } from '@generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class SpellComponent extends PrismaSpellComponent {
  @Field(() => Component)
    Component?: Component
}

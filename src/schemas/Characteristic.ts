import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Characteristic {
  @Field()
    name: string

  @Field(() => [String])
    info: string[]
}

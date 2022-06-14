import { Field, InputType } from 'type-graphql'

@InputType()
export class CharacterInputData {
  @Field()
    regionId:number

  @Field()
    originId:number

  @Field()
    lineageId:number

  @Field()
    pastId:number

  @Field()
    name:string

  @Field()
    essence:string

  @Field()
    expression:string

  @Field()
    exaltation:string
}

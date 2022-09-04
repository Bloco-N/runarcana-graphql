import { Field, InputType } from 'type-graphql'

@InputType()
export class SignUpInputData {
  @Field()
    username:string

  @Field()
    nickname:string

  @Field()
    password:string
}

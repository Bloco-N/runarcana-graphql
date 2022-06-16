import { Field, InputType } from 'type-graphql'

@InputType()
export default class SignUpInputData {
  @Field()
    username:string

  @Field()
    nickname:string

  @Field()
    password:string
}

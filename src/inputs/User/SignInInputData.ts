import { Field, InputType } from 'type-graphql'

@InputType()
export default class SignInInputData {
  @Field()
    username:string

  @Field()
    password:string
}

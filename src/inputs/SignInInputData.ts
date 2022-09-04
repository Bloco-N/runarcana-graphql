import { Field, InputType } from 'type-graphql'

@InputType()
export class SignInInputData {
  @Field()
    username:string

  @Field()
    password:string
}

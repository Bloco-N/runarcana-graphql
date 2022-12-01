import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class ApiResponse {
  constructor(message: string) {
    this.message = message
  }

  @Field(() => String)
  message: string
}

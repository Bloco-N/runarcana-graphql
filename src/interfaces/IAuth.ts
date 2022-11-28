import { User } from '../../prisma/generated/type-graphql'

export interface IAuth{
  token:string,
  user:User
}

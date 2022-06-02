import { UserResponse } from '../schemas/UserResponse'

export interface IAuth{
  token:string,
  user:UserResponse
}

import { UserResponse } from '../schemas/User/UserResponse'

export interface IAuth{
  token:string,
  user:UserResponse
}

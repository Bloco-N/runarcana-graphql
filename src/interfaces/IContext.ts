import { PrismaClient } from '@prisma/client'
import { UserResponse } from '../schemas/UserResponse'

export interface IContext{
  prisma:PrismaClient
  token?:string
  user?: UserResponse
}

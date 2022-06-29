import { PrismaClient } from '@prisma/client'
import { IUser } from './IUser'

export interface IContext{
  prisma:PrismaClient
  token?:string
  user?: IUser
}

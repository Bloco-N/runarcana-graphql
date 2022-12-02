import { IUser } from './IUser'
import { PrismaClient } from '@prisma/client'

export interface IContext {
  prisma: PrismaClient
  token?: string
  user?: IUser
}

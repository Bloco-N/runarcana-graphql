import { PrismaClient } from '@prisma/client'
import { UserResponse } from './schemas/UserResponse'

const prisma = new PrismaClient()

export interface Context{
  prisma:PrismaClient
  token?:string
  user?: UserResponse
}

export const context = ({ req }) => {
  const context:Context = {
    prisma,
    token: req?.headers?.authorization
  }

  return context
}

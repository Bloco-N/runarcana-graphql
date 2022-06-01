import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context{
  prisma:PrismaClient
  token?:string
}

export const context = ({ req }) => {
  const context:Context = {
    prisma,
    token: req?.headers?.authorization
  }

  return context
}

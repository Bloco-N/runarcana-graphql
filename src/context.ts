import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface UserWithoutPassword{
  id:number
  username:string,
  nickname:string,
}

export interface Context{
  prisma:PrismaClient
  token?:string
  user?: UserWithoutPassword
}

export const context = ({ req }) => {
  const context:Context = {
    prisma,
    token: req?.headers?.authorization
  }

  return context
}

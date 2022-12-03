import { IContext }     from './interfaces/IContext'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const context = async ({ req }) => {

  const context: IContext = {
    prisma,
    token: req?.headers?.authorization
  }

  return context

}

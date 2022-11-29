import { PrismaClient } from '@prisma/client'
import { IContext } from './interfaces/IContext'

const prisma = new PrismaClient()

export const context = async ({ req }) => {
  const context:IContext = {
    prisma,
    token: req?.headers?.authorization
  }

  return context
}

/* eslint-disable no-undef */
import 'reflect-metadata'
import { ApiResponse } from '../../src/schemas/ApiResponse'
import { PrismaClient } from '@prisma/client'
import UserService from '../../src/services/UserService'
import { IContext } from '../../src/interfaces/IContext'

const prisma = new PrismaClient()

describe('UserService tests', () => {
  afterAll(async () => {
    await prisma.user.delete({ where: { username: 'aurora' } })
    await prisma.$disconnect()
  })
  const ctx:IContext = {
    prisma
  }
  const userService = new UserService()

  test('should create a user', async () => {
    const data = {
      username: 'aurora',
      nickname: 'lazuli',
      password: 'aurorasenha'
    }
    const result = await userService.create(ctx, data)
    expect(result).toBeInstanceOf(ApiResponse)
    expect(result).toHaveProperty('message', '✅ user created')
  })

  test('should fetch data from user', async () => {
    const aurora = await ctx.prisma.user.findUnique({ where: { username: 'aurora' } })
    ctx.user = {
      id: aurora.id,
      username: aurora.username,
      nickname: aurora.nickname,
      createdAt: aurora.createdAt,
      updatedAt: aurora.updatedAt
    }
    const result = await userService.fetchAll(ctx)
    expect(result).toHaveProperty('username', 'aurora')
  })

  test('should throw a not found error', async () => {
    const aurora = await ctx.prisma.user.findUnique({ where: { username: 'aurora' } })
    ctx.user = {
      id: -1,
      username: aurora.username,
      nickname: aurora.nickname,
      createdAt: aurora.createdAt,
      updatedAt: aurora.updatedAt
    }
    expect(userService.fetchAll(ctx)).rejects.toThrowError(new Error('❌ User not found'))
  })
})

import { Past } from '@prisma/client'
import { IContext } from '../interfaces/IContext'
import { PastResponse } from '../schemas/PastResponse'

export default class PastService {
  public async listAll (ctx: IContext, search: string): Promise<PastResponse> {
    if (search) {
      const pasts = await ctx.prisma.past.findMany({
        where: {
          name: {
            contains: search,
            mode: 'insensitive'
          }
        }
      })
      return { pasts }
    }
    const pasts = await ctx.prisma.past.findMany()
    return { pasts }
  }

  public async getPastById (ctx:IContext, id:number): Promise<Past> {
    const past = await ctx.prisma.past.findUnique({ where: { id } })
    return past
  }
}
